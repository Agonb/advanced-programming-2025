# AI-Assisted Data Analysis Tool Mini-Project

## Objective
Create a command-line tool that analyzes CSV data using AI assistance throughout the development process.

## Requirements
Your tool should:
1. Read CSV files with numeric data
2. Calculate basic statistics (mean, median, mode, standard deviation)
3. Generate a simple text-based histogram
4. Find correlations between columns
5. Identify outliers

## Implementation Details
- Use Python for this project
- Include proper error handling for invalid files or data
- The tool should be usable from the command line
- Document your code thoroughly

## Sample Data
Use the provided `sample_data.csv` file for testing, which contains:
- id: Record identifier
- temperature: Temperature readings
- humidity: Humidity percentage
- pressure: Atmospheric pressure
- wind_speed: Wind speed measurements

## Deliverables
1. Source code files
2. Brief documentation of:
   - How to use the tool
   - Which parts were AI-assisted
   - Challenges encountered and how you solved them

## Example Usage
Your tool should support commands like:
- `python data_analysis.py sample_data.csv stats temperature`
- `python data_analysis.py sample_data.csv histogram humidity 10`
- `python data_analysis.py sample_data.csv correlation temperature humidity`
- `python data_analysis.py sample_data.csv outliers wind_speed 2.0`

## Development Process
1. Start by planning your approach with your partner
2. Use comments to guide GitHub Copilot in generating code
3. Critically evaluate and modify AI suggestions
4. Test your implementation with the provided sample data
5. Document which parts were AI-assisted and which parts you modified

## Time Allocation (40 minutes total)
- 5 minutes: Planning and design
- 25 minutes: Implementation with AI assistance
- 10 minutes: Testing and documenting

## Grading Criteria
- Functionality (working implementation of required features)
- Code quality (readability, organization, error handling)
- Effective use of AI assistance
- Documentation quality