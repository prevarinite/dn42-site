import { NodePluginArgs } from "gatsby";

export function onCreateWebpackConfig({ actions }: NodePluginArgs) {
    actions.setWebpackConfig({
        resolve: {
            fallback: {
            }
        }
    })
}
