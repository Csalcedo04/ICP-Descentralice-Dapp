import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as dbank_idl, canisterId as dbank_id } from '../../declarations/dbank_backend';

const agent = new HttpAgent();
// Solo en desarrollo
agent.fetchRootKey();

export const dbank = Actor.createActor(dbank_idl, {
  agent,
  canisterId: dbank_id,
});
