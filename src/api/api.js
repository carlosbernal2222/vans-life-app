
import api from "./axiosConfig";
export const getVans = async () => {
    try {
        const response = await api.get('api/vans');
        return response.data;
    } catch (err) {
        console.error('Error fetching vans:', err)

        // Create a new Error object with custom information
        const customError = new Error('Failed to fetch vans data');
        customError.status = err.response ? err.response.status : null; // Get the status from the response if available
        customError.statusText = err.response ? err.response.statusText : null;
        customError.details = err.message; // Set additional details from the original error message

        // Throw the custom error
        throw customError;
    }
};