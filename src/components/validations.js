export const validateTodo = (todo) => {
    const { title, date, task } = todo;

    if (!title || !date || !task) {
        return {
            success: false,
            message: 'All fields are required.',
        };
    }

    // Validate date field
    const inputDate = new Date(date);

    if (inputDate.toString() === 'Invalid Date' || inputDate.getFullYear() <= 2000) {
        return {
            success: false,
            message: 'Please enter a valid date (after the year 2000).',
        };
    }

    return {
        success: true,
        message: '',
    };
};
