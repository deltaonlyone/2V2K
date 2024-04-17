import React, { useState, useEffect } from 'react';

const UserPhotos = () => {
    const [userPhotos, setUserPhotos] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/users');
            const users = await response.json();

            const userPhotosPromises = users.map(async user => {
                const photos = user.photos.map(photo => `http://localhost:8080/api/photos/${photo.id}`);
                return { user, photos };
            });

            const allUserPhotos = await Promise.all(userPhotosPromises);
            const usersWithPhotos = allUserPhotos.filter(userWithPhotos => userWithPhotos.photos.length > 0);
            setUserPhotos(usersWithPhotos);
        } catch (error) {
            console.error('Error fetching user photos:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="container">
            {userPhotos.map((userWithPhotos, index) => (
                <div key={index} className="card my-3">
                    <div className="card-body">
                        <h2 className="card-title">{userWithPhotos.user.username}</h2>
                        <div className="row">
                            {userWithPhotos.photos.map((photoUrl, index) => (
                                <div key={index} className="col-md-3">
                                    <img
                                        src={photoUrl}
                                        alt={`photo-${index}`}
                                        className="img-fluid mb-2"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserPhotos;
