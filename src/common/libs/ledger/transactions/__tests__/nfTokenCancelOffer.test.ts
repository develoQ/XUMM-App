/* eslint-disable spellcheck/spell-checker */
/* eslint-disable max-len */
import NFTokenCancelOffer from '../nfTokenCancelOffer';

describe('NFTokenCancelOffer tx', () => {
    it('Should set tx type if not set', () => {
        const instance = new NFTokenCancelOffer();
        expect(instance.TransactionType).toBe('NFTokenCancelOffer');
        expect(instance.Type).toBe('NFTokenCancelOffer');
    });
});
