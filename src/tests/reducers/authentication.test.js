
import authetication from '../../reducers/authentication';

test('should set a uid for login', () => {
    const uid = 147061;
    const action = {
        type:'LOGIN',
        uid
    };
    const state = authetication({}, action);
    expect(state).toEqual({
        uid
    }) 
})

test(' should clear uid for logout', () => {
    const action = {
        type:'LOGOUT'
    };
    const state = authetication({uid:147061}, action);
    expect(state).toEqual({});
})