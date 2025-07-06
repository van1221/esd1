// Global app state
let appState = {
    currentUser: {
        id: 'user1',
        name: 'John Doe',
        email: 'john.doe@email.com',
        phone: '+1 (555) 123-4567',
        address: '123 Home Street, Residential District, City, State 12345',
        preferences: {
            chargingSpeed: 'rapid',
            notifications: {
                email: true,
                sms: true,
                push: false
            }
        }
    },
    vehicles: [...],
    chargingProfiles: [...],
    paymentMethods: [...],
    paymentHistory: [...]
};
... (JS content truncated for brevity)
