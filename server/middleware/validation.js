// Middleware to validate incoming request body for registrations
export const validateEnquiry = (req, res, next) => {
  const { name, email, phone } = req.body;
  
  // All fields required check
  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: ['All fields (name, email, phone) are required']
    });
  }

  const errors = [];

  // Name length validation (Min 3 characters)
  if (name.trim().length < 3) {
    errors.push('Name must be at least 3 characters long');
  }

  // Email format validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.trim())) {
    errors.push('Please provide a valid email address');
  }

  // Phone number validation (Exactly 10 digits)
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone.trim())) {
    errors.push('Phone number must be exactly 10 digits');
  }

  // If there are validation errors, return error response
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors
    });
  }

  // Clean data in request body and continue
  req.body.name = name.trim();
  req.body.email = email.trim().toLowerCase();
  req.body.phone = phone.trim();

  next();
};
