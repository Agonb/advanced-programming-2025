Hi everyone,

Great work on completing the initial version of the **User Profile Microservice**! Now it’s time to **upgrade** your project by doing two important things:

---

## ✅ Part 1: Add Unit and Integration Tests

### 📌 Why?
Testing is a core part of building reliable applications. You’ll add:
- **Unit tests** → to test individual functions (e.g., user service functions)
- **Integration tests** → to test entire API routes (e.g., `/users`, `/auth/login`)

### 🧪 What You Need To Do

#### 1. **Install Testing Tools**  
If you're using **Node.js/Express**, install:
```bash
npm install --save-dev jest supertest
```

Update `package.json`:
```json
"scripts": {
  "test": "jest"
}
```

#### 2. **Set Up Jest Config (Optional)**  
Create a `jest.config.js` file:
```js
module.exports = {
  testEnvironment: 'node',
};
```

#### 3. **Write Unit Tests** (`tests/userService.test.js`)
Test your service layer (e.g., user creation, password validation).
Example:
```js
const { createUser } = require('../src/services/userService');

describe('User Service', () => {
  it('should create a user with valid input', () => {
    const user = createUser({ email: 'a@a.com', name: 'Test' });
    expect(user).toHaveProperty('id');
  });
});
```

#### 4. **Write Integration Tests** (`tests/routes.test.js`)
Use **Supertest** to test API routes.
Example:
```js
const request = require('supertest');
const app = require('../server'); // or wherever your express app is

describe('POST /users', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({ email: 'test@test.com', password: '123456', name: 'Test' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });
});
```

#### 5. **Run Tests**
```bash
npm test
```

✅ **You must have at least:**
- 2 unit tests (service functions)
- 2 integration tests (API endpoints)

---

## 🌐 Part 2: Connect the App to Supabase

We’ll now **replace in-memory storage** with **Supabase**, a free hosted PostgreSQL backend with RESTful API and authentication.

### 🧭 Steps

#### 1. **Create a Supabase Project**
- Go to [https://supabase.com/](https://supabase.com/)
- Create a free account and project

#### 2. **Create a `users` Table**
Use the SQL editor or Table view to create:
```sql
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  password text NOT NULL,
  name text,
  address jsonb,
  registration_date timestamp DEFAULT now(),
  last_login timestamp
);
```

#### 3. **Get Supabase URL & API Key**
Go to Project Settings → API:
- Save the **anon public API key**
- Save the **project URL**

#### 4. **Install Supabase Client**
```bash
npm install @supabase/supabase-js
```

#### 5. **Initialize Supabase in Your Project**  
Create `src/utils/supabaseClient.js`:
```js
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://your-project.supabase.co';
const supabaseKey = 'your-anon-key';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
```

#### 6. **Update User Service to Use Supabase**

Instead of pushing to an array, use:
```js
const supabase = require('../utils/supabaseClient');

async function createUser(user) {
  const { data, error } = await supabase
    .from('users')
    .insert([user])
    .select();

  if (error) throw new Error(error.message);
  return data[0];
}
```

> 🔐 Hash the password before storing (use `bcrypt`)

#### 7. **Use Supabase in All CRUD Operations**
Update your `getUserById`, `updateUser`, and `loginUser` functions to interact with Supabase instead of in-memory storage.

---

## 💾 What To Submit

In your GitHub folder, make sure you have:
1. ✅ Working code with Supabase integration
2. 🧪 Tests inside `/tests` folder
3. 📄 Updated README showing:
   - How to run tests
   - How to connect to Supabase
   - Any setup steps

---

If you have questions or face any issues, post them in the forum or come during office hours. This is a crucial step towards making your service production-ready.

Enjoy coding!