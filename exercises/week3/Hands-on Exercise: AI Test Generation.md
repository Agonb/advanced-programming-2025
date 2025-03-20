# Advanced Programming - Week 3
## Hands-on Exercise: AI Test Generation

### Overview
In this exercise, you will use AI tools to generate and refine unit tests for a given function. This will help you understand how AI can assist in testing and how to ensure the quality of AI-generated tests.

### Learning Objectives
- Generate unit tests using AI tools
- Evaluate the quality and coverage of AI-generated tests
- Refine and improve tests based on edge cases
- Implement a complete test suite for a function

### Prerequisites
- A GitHub account
- Access to GitHub Copilot, ChatGPT, or another AI assistant
- Basic knowledge of unit testing in JavaScript or Python

### Provided Code
Below is a function called `validateUserData` that performs validation on user registration data. This function has multiple edge cases and conditions that need to be tested.

#### JavaScript Version (Jest)
```javascript
/**
 * Validates user registration data
 * @param {Object} userData - The user data to validate
 * @param {string} userData.username - The username (required, 3-20 chars, alphanumeric)
 * @param {string} userData.email - The email address (required, valid format)
 * @param {string} userData.password - The password (required, min 8 chars, at least 1 number and 1 special char)
 * @param {number} [userData.age] - The user's age (optional, must be 18+ if provided)
 * @param {string} [userData.referralCode] - Referral code (optional, must be exactly 8 chars if provided)
 * @returns {Object} - Object with isValid flag and any error messages
 */
function validateUserData(userData) {
    const result = {
        isValid: true,
        errors: {}
    };

    // Check if userData exists and is an object
    if (!userData || typeof userData !== 'object') {
        result.isValid = false;
        result.errors.global = "Invalid user data format";
        return result;
    }

    // Validate username
    if (!userData.username) {
        result.isValid = false;
        result.errors.username = "Username is required";
    } else if (userData.username.length < 3 || userData.username.length > 20) {
        result.isValid = false;
        result.errors.username = "Username must be between 3 and 20 characters";
    } else if (!/^[a-zA-Z0-9_]+$/.test(userData.username)) {
        result.isValid = false;
        result.errors.username = "Username can only contain letters, numbers, and underscores";
    }

    // Validate email
    if (!userData.email) {
        result.isValid = false;
        result.errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
        result.isValid = false;
        result.errors.email = "Invalid email format";
    }

    // Validate password
    if (!userData.password) {
        result.isValid = false;
        result.errors.password = "Password is required";
    } else if (userData.password.length < 8) {
        result.isValid = false;
        result.errors.password = "Password must be at least 8 characters long";
    } else if (!/\d/.test(userData.password)) {
        result.isValid = false;
        result.errors.password = "Password must contain at least one number";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(userData.password)) {
        result.isValid = false;
        result.errors.password = "Password must contain at least one special character";
    }

    // Validate age (optional)
    if (userData.age !== undefined) {
        if (typeof userData.age !== 'number') {
            result.isValid = false;
            result.errors.age = "Age must be a number";
        } else if (userData.age < 18) {
            result.isValid = false;
            result.errors.age = "User must be at least 18 years old";
        }
    }

    // Validate referral code (optional)
    if (userData.referralCode !== undefined) {
        if (typeof userData.referralCode !== 'string') {
            result.isValid = false;
            result.errors.referralCode = "Referral code must be a string";
        } else if (userData.referralCode.length !== 8) {
            result.isValid = false;
            result.errors.referralCode = "Referral code must be exactly 8 characters";
        }
    }

    return result;
}

module.exports = validateUserData;
```

#### Python Version (pytest)
```python
def validate_user_data(user_data):
    """
    Validates user registration data
    
    Args:
        user_data (dict): The user data to validate with the following keys:
            - username (str): Required, 3-20 chars, alphanumeric
            - email (str): Required, valid format
            - password (str): Required, min 8 chars, at least 1 number and 1 special char
            - age (int, optional): The user's age, must be 18+ if provided
            - referral_code (str, optional): Must be exactly 8 chars if provided
            
    Returns:
        dict: Object with is_valid flag and any error messages
    """
    import re
    
    result = {
        "is_valid": True,
        "errors": {}
    }
    
    # Check if user_data exists and is a dictionary
    if not user_data or not isinstance(user_data, dict):
        result["is_valid"] = False
        result["errors"]["global"] = "Invalid user data format"
        return result
    
    # Validate username
    if "username" not in user_data or not user_data["username"]:
        result["is_valid"] = False
        result["errors"]["username"] = "Username is required"
    elif len(user_data["username"]) < 3 or len(user_data["username"]) > 20:
        result["is_valid"] = False
        result["errors"]["username"] = "Username must be between 3 and 20 characters"
    elif not re.match(r'^[a-zA-Z0-9_]+$', user_data["username"]):
        result["is_valid"] = False
        result["errors"]["username"] = "Username can only contain letters, numbers, and underscores"
    
    # Validate email
    if "email" not in user_data or not user_data["email"]:
        result["is_valid"] = False
        result["errors"]["email"] = "Email is required"
    elif not re.match(r'^[^\s@]+@[^\s@]+\.[^\s@]+$', user_data["email"]):
        result["is_valid"] = False
        result["errors"]["email"] = "Invalid email format"
    
    # Validate password
    if "password" not in user_data or not user_data["password"]:
        result["is_valid"] = False
        result["errors"]["password"] = "Password is required"
    elif len(user_data["password"]) < 8:
        result["is_valid"] = False
        result["errors"]["password"] = "Password must be at least 8 characters long"
    elif not re.search(r'\d', user_data["password"]):
        result["is_valid"] = False
        result["errors"]["password"] = "Password must contain at least one number"
    elif not re.search(r'[!@#$%^&*(),.?":{}|<>]', user_data["password"]):
        result["is_valid"] = False
        result["errors"]["password"] = "Password must contain at least one special character"
    
    # Validate age (optional)
    if "age" in user_data:
        if not isinstance(user_data["age"], int):
            result["is_valid"] = False
            result["errors"]["age"] = "Age must be a number"
        elif user_data["age"] < 18:
            result["is_valid"] = False
            result["errors"]["age"] = "User must be at least 18 years old"
    
    # Validate referral code (optional)
    if "referral_code" in user_data:
        if not isinstance(user_data["referral_code"], str):
            result["is_valid"] = False
            result["errors"]["referral_code"] = "Referral code must be a string"
        elif len(user_data["referral_code"]) != 8:
            result["is_valid"] = False
            result["errors"]["referral_code"] = "Referral code must be exactly 8 characters"
    
    return result
```

### Exercise Tasks

#### Part 1: Initial Test Generation
1. Choose either the JavaScript or Python version of the function.
2. Use GitHub Copilot, ChatGPT, or another AI assistant to generate a complete set of unit tests for the function.
3. If using ChatGPT or similar, provide a prompt like: "Generate a comprehensive set of unit tests for the following function..."
4. Copy the AI-generated tests to a new file (`validateUserData.test.js` for JavaScript or `test_validate_user_data.py` for Python).

#### Part 2: Test Evaluation
Analyze the AI-generated tests and answer the following questions:
1. Does the test suite cover all parameters and conditions in the function?
2. Are there any edge cases that are not covered?
3. Are the tests well-structured and follow best practices?
4. How readable and maintainable are the tests?
5. Note any improvements that could be made to the tests.

#### Part 3: Test Refinement
1. Refine the AI-generated tests to address any issues you identified in Part 2.
2. Add any missing test cases, especially for edge cases.
3. Improve the structure and readability of the tests as needed.
4. Ensure each test has a clear purpose and descriptive name.

#### Part 4: Running the Tests
1. Set up a testing environment for your chosen language (Jest for JavaScript or pytest for Python).
2. Run your refined tests against the provided function.
3. Fix any issues that arise when running the tests.
4. Record the test results and any insights gained.

#### Part 5: Reflection
Write a brief reflection (200-300 words) addressing the following points:
1. How effective was the AI at generating tests? What did it do well and what did it miss?
2. What strategies did you use to improve the AI-generated tests?
3. How would you use AI-assisted testing in real-world development?
4. What are the limitations and potential risks of relying on AI for test generation?

### Submission Requirements
Submit a ZIP file containing:
1. Your refined test file (`validateUserData.test.js` or `test_validate_user_data.py`)
2. A text file with your answers to the evaluation questions (Part 2)
3. Your reflection document (Part 5)
4. A screenshot showing your test results

### Evaluation Criteria
- Comprehensive test coverage (40%)
- Quality and clarity of tests (25%)
- Identification of weaknesses in AI-generated tests (15%)
- Thoughtfulness of reflection (15%)
- Successfully running tests (5%)

### Resources
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Pytest Documentation](https://docs.pytest.org/en/stable/)
- [Best Practices for Unit Testing](https://github.com/mawrkus/js-unit-testing-guide)
- [How to Write Good Test Cases](https://martinfowler.com/articles/practical-test-pyramid.html)