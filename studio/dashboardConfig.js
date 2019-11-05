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
                  buildHookId: '5dc136d4264ddf43bf60fd47',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-iqhojteq',
                  apiId: '8152c8c5-9429-4dc8-a73f-db4a92df810d'
                },
                {
                  buildHookId: '5dc136d496e54b1b9570b545',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ohe2kr5b',
                  apiId: '97d8d384-a001-4094-9479-ee50085077af'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/luandevpro/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ohe2kr5b.netlify.com', category: 'apps'}
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
