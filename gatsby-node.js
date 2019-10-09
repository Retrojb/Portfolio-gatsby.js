 /**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.onPostBuild = ({ reporters}) => {
    reporters.info(`Success`)
}

exports.onCreateNode = ({ node }) => {
    console.log(node.internal.type)
}

// exports.createNode = ({ actions, createNodeId, createContentDigest }) => {
//     const data = [
//         { name: `experience` , type: `json`},
//         { name: `experience` , type: `json`}
//     ]
//     const expContent = JSON.stringify(data);
//     data.forEach( data => {
//         const nodeMeta = {
//             id: createNodeId(`Data-${data.name}`),
//             parent: null,
//             child:[],
//             internal: {
//                 type: `Json`,
//                 content: expContent,
//                 contentDigest: createContentDigest(data)
//                 },
//             data,
//             }
//             actions.createNode(nodeMeta)
//         })
//     }

//     exports.onCreateNode = ({ actions, createNodeId, createContentDigest }) => {
//         const logos = [
//             { name: "java" , type: "json"}

//         ]
//         logos.forEach( logo => {
//             const node = {
//                 id: createNodeId(`Data-${logo.name}`),
//                 name: logo.name,
//                 children:[createNodeId(`Data-${logo.name}`)],
//                 parent: null,
                
//                 internal: {
//                     contentDigest: createContentDigest(logo),
//                     content: JSON.stringify(logo)
//                 },
//                 logo
//             }
//             actions.createNode(node)
//         })
//     }
//         const node = Object.assign({}, data, nodeMeta )
//         createNode(node)
