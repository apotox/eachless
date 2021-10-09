import { expect } from 'chai'
import { Eachless } from '../src'
import example from './example-1.json'



describe('Eachless', () => {
    describe('Core', () => {
        it('should throw an error', () => {
            expect(()=>Eachless(example, ['users', 'relations', 5]).next()).to.throw(Error)
        })

        it('should iterate through 5 items', () => {

            let itr = Eachless(example, ['users', 'relations', 'rates','label'])

            const arr = []
            for(const item of itr){
                arr.push(item)
            }

            expect(arr.length).to.eq(5)
        })
    })
})



