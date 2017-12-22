
import { login, logout } from '../../actions/authentication';


test("should return a login action", () => {
    const uid = 123456;
    const action = login(uid);
    expect(action).toEqual({
        type:'LOGIN',
        uid
    });
})


test('should return a logout action', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT',
    })
})