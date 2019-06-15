import reducer, { actions } from "../../ducks/orders";

describe('orders reducer', () => {
    it('should place a new order', () => {
        const newState = reducer(undefined, actions.placeOrder({
            customer: 'Test Customer name',
            cone: false,
            scoops: {
                TEST_FLAVOR: 7
            }
        }))

        expect(newState.length).toEqual(1)
        expect(newState[0].customer).toEqual('Test Customer name')
        expect(typeof newState[0].createdAt).toEqual(Date.now())
        expect(newState[0].scoops.TEST_FLAVOR).toEqual(7)
        expect(newState[0].status).toEqual('pending')
    })
})