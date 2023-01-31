

function getLocation() {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {enableHighAccuracy: true});
}


function successCallback(position) {
    
    
}

function errorCallback(error) {
    if (error.code === 1) {
        console.log('Permission denied');
    }
    
    if (error.code === 2) {
        console.log('Network error');
    }

    if (error.code === 3) {
        console.log('timeout');
    }
}


export { getLocation }