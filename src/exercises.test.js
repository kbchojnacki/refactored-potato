import {
    calculate, calculateFromText,
    createPerson,
    divide, filterPeopleByField, filterPeopleByLastName,
    getFullName, getLastNames,
    getPersonFromDetails, isOlderThan,
    isPositiveNumber,
    minus,
    multiply, sortByPeopleByAge,
    sum
} from "./exercises";


describe("sum", () => {

    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

})


describe("minus", () => {

    test('subtract 1 - 2 to equal -1', () => {
        expect(minus(1, 2)).toBe(-1);
    });

})


describe("multiply", () => {

    test('multiply 3 * 2 to equal 6', () => {
        expect(multiply(3, 2)).toBe(6);
    });

})

describe("divide", () => {

    test('divide 6 / 2 to equal 3', () => {
        expect(divide(6, 2)).toBe(3);
    });

})

describe("minus", () => {

    test('subtract 1 - 2 to equal -1', () => {
        expect(minus(1, 2)).toBe(-1);
    });

})

describe("isPositiveNumber", () => {

    test('should return true for positive number', () => {
        expect(isPositiveNumber(100)).toBe(true);
    });

    test('should return true for 0', () => {
        expect(isPositiveNumber(0)).toBe(true);
    });

    test('should return false for negative number', () => {
        expect(isPositiveNumber(-12)).toBe(false);
    });
})


describe("isNegativeNumber", () => {

    test('should return false for positive number', () => {
        expect(isPositiveNumber(100)).toBe(true);
    });

    test('should return false for 0', () => {
        expect(isPositiveNumber(0)).toBe(false);
    });

    test('should return true for negative number', () => {
        expect(isPositiveNumber(-12)).toBe(true);
    });
})


describe("calculate", () => {

    test('should return 6 for 2*3', () => {
        expect(calculate(2, 3, '*')).toBe(6);
    });

    test('should return 2 for 6/3', () => {
        expect(calculate(6, 3, '/')).toBe(2);
    });

    test('should return 7 for 3+4', () => {
        expect(calculate(3, 4, '+')).toBe(7);
    });

    test('should return 8 for 12-4', () => {
        expect(calculate(12, 4, '-')).toBe(8);
    });
})


describe("createPerson", () => {
    test('should create person', () => {
        expect(createPerson('Jakub', 'Chojnacki', 24))
            .toBe({'firstName': 'Jakub', 'lastName': 'Chojnacki', 'age': 24});
    });
})

describe("getFullName", () => {
    test('should get full name', () => {
        expect(getFullName({'firstName': 'Jakub', 'lastName': 'Chojnacki', 'age': 24}))
            .toBe('Jakub Chojnacki');
    });
})

describe("getPersonFromDetails", () => {
    test('should create person from details', () => {
        expect(getPersonFromDetails('Jakub Chojnacki 24'))
            .toBe({'firstName': 'Jakub', 'lastName': 'Chojnacki', 'age': 24});
    });
})


describe("calculateFromText", () => {

    test('should return 6 for 2*3', () => {
        expect(calculateFromText('2 * 6')).toBe(6);
    });

    test('should return 2 for 6/3', () => {
        expect(calculateFromText('6 / 3')).toBe(2);
    });

    test('should return 7 for 3+4', () => {
        expect(calculateFromText('3 + 4')).toBe(7);
    });

    test('should return 8 for 12-4', () => {
        expect(calculateFromText('12 - 4')).toBe(8);
    });
})


describe("isOlderThan", () => {

    test('should false if 24 years old person is not older than 30', () => {
        expect(isOlderThan({'firstName': 'Jakub', 'lastName': 'Chojnacki', 'age': 24}, 30)).toBe(false);
    });

    test('should true if 24 years old person is not older than 10', () => {
        expect(isOlderThan({'firstName': 'Jakub', 'lastName': 'Chojnacki', 'age': 24}, `0`)).toBe(true);
    });

})


describe("getLastNames", () => {

    test('should return list of last names from array of person', () => {
        const person1 = {'firstName': 'Jakub', 'lastName': 'Chojnacki', 'age': 27};
        const person2 = {'firstName': 'Mariusz', 'lastName': 'Chojnacki', 'age': 24};
        const person3 = {'firstName': 'Jakub', 'lastName': 'Tomaszewski', 'age': 25};
        const person4 = {'firstName': 'Grzegorz', 'lastName': 'Chojnacki', 'age': 28};

        const people = [person1, person2, person3, person4];

        expect(getLastNames(people)).toBe(['Chojnacki', 'Chojnacki', 'Tomaszewski', 'Chojnacki']);
    });


})


describe("getUniqueLastNames", () => {

    test('should return list of unique last names from array of person', () => {
        const person1 = {'firstName': 'Jakub', 'lastName': 'Chojnacki', 'age': 27};
        const person2 = {'firstName': 'Mariusz', 'lastName': 'Chojnacki', 'age': 24};
        const person3 = {'firstName': 'Jakub', 'lastName': 'Tomaszewski', 'age': 25};
        const person4 = {'firstName': 'Grzegorz', 'lastName': 'Chojnacki', 'age': 28};


        const people = [person1, person2, person3, person4];

        expect(getLastNames(people)).toBe(['Chojnacki', 'Tomaszewski']);
    });


})

describe("filterPeopleByLastName", () => {

    test('should return list of people filtered by last name', () => {
        const person1 = {'firstName': 'Jakub', 'lastName': 'Chojnacki', 'age': 27};
        const person2 = {'firstName': 'Mariusz', 'lastName': 'Chojnacki', 'age': 24};
        const person3 = {'firstName': 'Jakub', 'lastName': 'Tomaszewski', 'age': 25};
        const person4 = {'firstName': 'Grzegorz', 'lastName': 'Chojnacki', 'age': 28};

        const people = [person1, person2, person3, person4];

        expect(filterPeopleByLastName(people, 'Chojnacki')).toBe([person1, person2, person4]);
    });


})


describe("sortByPeopleByAge", () => {

    test('should return list of people sorted by age', () => {
        const person1 = {'firstName': 'Jakub', 'lastName': 'Chojnacki', 'age': 27};
        const person2 = {'firstName': 'Mariusz', 'lastName': 'Chojnacki', 'age': 24};
        const person3 = {'firstName': 'Jakub', 'lastName': 'Tomaszewski', 'age': 25};
        const person4 = {'firstName': 'Grzegorz', 'lastName': 'Chojnacki', 'age': 28};
        const people = [person1, person2, person3, person4];
        expect(sortByPeopleByAge(people)).toBe([person2, person3, person1, person4]);
    });


})


describe("filterPeopleByField", () => {

    test('should return list of people filtered by age', () => {
        const person1 = {'firstName': 'Jakub', 'lastName': 'Chojnacki', 'age': 27};
        const person2 = {'firstName': 'Mariusz', 'lastName': 'Chojnacki', 'age': 24};
        const person3 = {'firstName': 'Jakub', 'lastName': 'Tomaszewski', 'age': 25};
        const person4 = {'firstName': 'Grzegorz', 'lastName': 'Chojnacki', 'age': 28};
        const people = [person1, person2, person3, person4];
        expect(filterPeopleByField(people, 'age', 24)).toBe([person2]);
    });

    test('should return list of people filtered by first name', () => {
        const person1 = {'firstName': 'Jakub', 'lastName': 'Chojnacki', 'age': 27};
        const person2 = {'firstName': 'Mariusz', 'lastName': 'Chojnacki', 'age': 24};
        const person3 = {'firstName': 'Jakub', 'lastName': 'Tomaszewski', 'age': 25};
        const person4 = {'firstName': 'Grzegorz', 'lastName': 'Chojnacki', 'age': 28};
        const people = [person1, person2, person3, person4];
        expect(filterPeopleByField(people, 'firstName', 'Jakub')).toBe([person1, person3]);
    });
})


