let cars = [
    {
        id: 1,
        name: 'BMW 1',
        tablice: 'SU090AB',
        calendarId: 'c324e43eb43dc852b7ebd49ff328bbab4d9d14d23a4a3df89663fc22fc370b26@group.calendar.google.com'
    },
    {
        id: 2,
        name: 'Mercedes S klasa',
        tablice: 'NS001AA',
        calendarId: 'c324e43eb43dc852b7ebd49ff328bbab4d9d14d23a4a3df89663fc22fc370b26@group.calendar.google.com'
    },
    {
        id: 3,
        name: 'Audi A3',
        tablice: 'SU070CC',
        calendarId: 'c324e43eb43dc852b7ebd49ff328bbab4d9d14d23a4a3df89663fc22fc370b26@group.calendar.google.com'
    },
    {
        id: 4,
        name: 'Ford C-Max',
        tablice: 'SU080EB',
        calendarId: '5f262cb6399d41786276fdf99ac7aeda780deccb8c9facb7f4fae2c49064adbd@group.calendar.google.com'
    },
    {
        id: 5,
        name: 'Lamborgini',
        tablice: 'SU010EB',
        calendarId: 'c324e43eb43dc852b7ebd49ff328bbab4d9d14d23a4a3df89663fc22fc370b26@group.calendar.google.com'
    },
    {
        id: 6,
        name: 'Lamborgini',
        tablice: 'SU010EB',
        calendarId: 'c324e43eb43dc852b7ebd49ff328bbab4d9d14d23a4a3df89663fc22fc370b26@group.calendar.google.com'
    },
]


const getAllICars = (req, res) => {
    res.status(200).json({ successful: true, data: cars })
}

/**
 * prvo trazimo auto na osnovu id, uporedjuje sa id iz liste i id iz requesta
 * ako je car false onda se salje error 404
 * ako nije prazan salje se auto
 * u catch se stavlja error vezan za probleme sa serverom code: 500>
 */
const getCarById = (req, res) => {
    try {
        const { itemID } = req.params;
        const car = cars.find((car) => car.id === Number(itemID));
        if (!car) {
            return res.status(404).json({ success: false, data: 'This car doesnt exits' });
        }
        res.status(200).json({ success: true, data: car });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An unexpected error occurred" });
    }
}

module.exports = {
    getAllICars,
    getCarById
}


