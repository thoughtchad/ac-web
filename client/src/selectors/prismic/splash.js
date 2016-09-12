import {createSelector} from 'reselect'
import {getIsFetching} from 'reducers/prismic'
import transform from 'selectors/prismic/transform'
import {List} from 'immutable'

function getType(state, {type}) {
    return type
}
function getTransformedDocuments(state, {documents = []}) {
    return new List(documents.map(transform))
}
function isFeatured(post) {
    return post.isFeatured
}

export default createSelector(
    getType,
    getTransformedDocuments,
    getIsFetching,
    (type, documents, isFetching) => {
        const featured = documents.find(isFeatured) || documents.first()
        const feed = documents.filter(document => document !== featured)
        let message = null

        if (isFetching) {
            message = `Loading some ${type}...`
        }

        return {
            featured,
            feed,
            message,
        }
    }
)
