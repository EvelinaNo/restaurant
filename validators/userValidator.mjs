import { checkSchema, param } from "express-validator";

export const userValidationSchema = checkSchema({
    name: {
        isLength: {
            options: { min: 2, max: 32 },
            errorMessage: 'Name must be at least 2 characters and max characters is 32'
        },
        notEmpty: {
            errorMessage: 'Name cannot be empty'
        },
        isString: {
            errorMessage: 'Username must be a string'
        }

    },
    password: {
        isLength: {
            options: { min: 8, max: 128 },
            errorMessage: 'Password must be between 8 and 128 characters'
        },
        matches: {
                options: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&~#^_+=\-';,./|":<>])[A-Za-z\d@$!%*?&~#^_+=\-';,./|":<>]{8,128}$/,
                errorMessage: 'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'
            },
            notEmpty: {
                errorMessage: 'Password cannot be empty'
            }
        },
        email: {
            isEmail: {
                errorMessage: 'Email must be valid',
            },
            notEmpty: {
                errorMessage: 'Email cannot be empty'
            },

        }
});





export const updateUserFieldsValidationSchema = checkSchema({
    name: {
        isLength: {
            options: { min: 2, max: 32 },
            errorMessage: 'Name must be at least 2 characters and max characters is 32'
        },
        notEmpty: {
            errorMessage: 'Name cannot be empty'
        },
        isString: {
            errorMessage: 'Username must be a string'
        }

    },
    password: {
        isLength: {
            options: { min: 8, max: 128 },
            errorMessage: 'Password must be between 8 and 128 characters'
        },
        matches: {
                options: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&~#^_+=\-';,./|":<>])[A-Za-z\d@$!%*?&~#^_+=\-';,./|":<>]{8,128}$/,
                errorMessage: 'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'
            },
            notEmpty: {
                errorMessage: 'Password cannot be empty'
            }
        },
        email: {
            isEmail: {
                errorMessage: 'Email must be valid',
            },
            notEmpty: {
                errorMessage: 'Email cannot be empty'
            },

        }
});


export const validateUserId = [
    param('id')
    .isInt()
    .withMessage('ID must be an integer')
];

export const validateOrderParams = [
    param('userId')
    .isInt()
    .withMessage('User ID must be ant integer'),
    param('orderId')
    .isInt()
    .withMessage('Order ID must be ant integer')
];