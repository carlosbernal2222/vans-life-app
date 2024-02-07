
import api from "./axiosConfig";
export const getVans = async () => {
    try {
        const response = await api.get('api/vans');
        return response.data;
    } catch (err) {
        console.error('Error fetching vans:', err);
        throw err;
    }
};