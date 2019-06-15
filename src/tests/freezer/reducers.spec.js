import reducer, {actions, MAX_AMOUNT_PER_ICECREAM} from '../../ducks/freezer'
import * as flavors from '../../constants/icecreams_flavors'

describe('Freezer reducer', () => {
    it('should store the temperature in the state', () => {
        const newState = reducer(undefined, actions.updateTemperature(-6))
        expect(newState.temperature).toEqual(-6)
    })
    
    it('should store the icecream in the state', () => {
        const newState = reducer(undefined, actions.addIcecream(flavors.CHOCOLATE, 33))
        expect(newState.icecreams[flavors.CHOCOLATE]).toEqual(33)
    })
    
    it('should add amount to an icecream if it already exists', () => {
        const previousState = {
            icecreams: {
                [flavors.CHOCOLATE]: 3
            }
        }
        const newState = reducer(previousState, actions.addIcecream(flavors.CHOCOLATE, 7))
        expect(newState.icecreams[flavors.CHOCOLATE]).toEqual(10)
    })
    
    it('should limit the amount to a maximum value', () => {
        const previousState = {
            icecreams: {
                [flavors.CHOCOLATE]: 5
            }
        }
        const newState = reducer(previousState, actions.addIcecream(flavors.CHOCOLATE, 666))
        expect(newState.icecreams[flavors.CHOCOLATE]).toEqual(MAX_AMOUNT_PER_ICECREAM)
    })

})