/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

    exports.onCreateNode = ({ actions, createNodeId, createContentDigest }) => {
        const data = [
            { name: "experience" , type: "json"},
            { name: "about", type: "child" }
        ]
        data.forEach( d => {
            const node = {
                name: d.name,
                id: createNodeId(`Data-${data.name}`),
                internal: {
                    contentDigest: createContentDigest(data)
                },
            }
            actions.createNode(node)
        })
    }
