import { history } from '../routing/history';
import { getNewEntryUrl } from '../lib/urlHelper';

export function searchCollections(query: string, collection: string) {
  if (collection) {
    history.push(`/collections/${collection}/search/${query}`);
  } else {
    history.push(`/search/${query}`);
  }
}

export function createNewEntry(collectionName: string) {
  history.push(getNewEntryUrl(collectionName));
}
