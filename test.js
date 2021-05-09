const {solution, prevDay, nextDay, days} = require('./solution');

const assert = require('assert');

it('Case when two days are missing in dictionary', () => {
    assert.deepEqual(solution({"2020-01-01": 6,"2020-01-04": 12,"2020-01-05": 14,"2020-01-06": 2,
    "2020-01-07": 4}), { Wed: 6, Sat: 12, Sun: 14, Mon: 2, Tue: 4, Thu: 8, Fri: 10 })
});

it('Case when no day is missing in dictionary', () => {
    assert.deepEqual(solution({"2020-01-01": 4,"2020-01-02": 4,"2020-01-03": 6, "2020-01-04": 8, "2020-01-05": 2,
    "2020-01-06": -6, "2020-01-07": 2, "2020-01-08": -2}), {'Mon':-6, 'Tue':2, 'Wed':2, 'Thu':4, 'Fri':6, 'Sat':8, 'Sun':2});
})

it('Case three', () => {
    assert.deepEqual(solution({"2021-05-10":4, "2021-05-16":34}), {'Mon':4, 'Tue':9, 'Wed':14, 'Thu':19, 'Fri':24, 'Sat':29, 'Sun':34});
})