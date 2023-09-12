const profile = {
    pname: 'alex',
    gender: 'male',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};

const {gender}: {gender: string} = profile;
const {coords: {lat, lng}}: {coords: {lat: number, lng:number}} = profile;
const {age, pname}: {age: number, pname: string} = profile;