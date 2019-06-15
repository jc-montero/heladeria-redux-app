import { actionTypes, actions } from "../../ducks/orders";

describe('placeOrder', () => {
    it('should has the right action type', () => {
        const action = actions.placeOrder({})
        expect(action.type).toEqual(actionTypes.PLACE_ORDER)
    })
    
    it('should contains the customer name', () => {
        const action = actions.placeOrder({customer: 'Test Customer name'})
        expect(action.payload.customer).toEqual('Test Customer name')
    })
    
    it('should contains the date', () => {
        const action = actions.placeOrder({createdAt: 0})
        expect(action.payload.createdAt).toEqual(0)
    })
    
    it('should contains whereas a cone is requested', () => {
        const action = actions.placeOrder({cone: true})
        expect(action.payload.cone).toBeTruthy()
    })
    
    it('should contains scoops', () => {
        const action = actions.placeOrder({scoops: 'some scoops'})
        expect(action.payload.scoops).toEqual('some scoops')
    })
    
    it('should contains a default date', () => {
        const action = actions.placeOrder({})
        expect(action.payload.createdAt).toEqual(Date.now())
    })
})