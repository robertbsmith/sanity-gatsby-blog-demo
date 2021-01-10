export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ffac75034de3f3abb12373e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-demo-studio-tkpi4h6o',
                  apiId: '6f7a2255-4bb0-479a-a7a4-49492fa73ccb'
                },
                {
                  buildHookId: '5ffac750dfa7f2d7bd250434',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-demo-web-n2akzkjb',
                  apiId: '762bcd75-3e86-476e-a5ec-709caadf58af'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robertbsmith/sanity-gatsby-blog-demo',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-demo-web-n2akzkjb.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
