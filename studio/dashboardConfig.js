export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61bf302dd6e5eef23cdfe18c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1ihbtkty',
                  apiId: 'b74d5921-b472-44bd-b810-febca2ef0a44'
                },
                {
                  buildHookId: '61bf302d856b5454f5b987f7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jee67se2',
                  apiId: '576fdd2f-cc05-4a37-8c4c-1cbc2c7a8788'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TROISIDesign/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jee67se2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
