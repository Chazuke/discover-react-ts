function getPayees() {
    return fetch("http://localhost:8000/api/v1/banking/payees")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            //Handle status of >= 400
            return Promise.reject({
                message: 'Bad status',
                status: response.status
            });
        }
    })
    .catch(handleError);
}

function handleError(error: any) {
    // Handle Error
    if (error.message) {
        return Promise.reject(error);
    } else {
        return Promise.reject({
            message: 'Unknown DAO Error'
        })
    }
}

const dao = {
    getPayees
};

export default dao;