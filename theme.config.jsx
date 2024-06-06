export default {
    logo: <span>Programmer's Handbook</span>,
    project: {
        link: 'https://github.com/Rochester-CS-Club'
    },
    footer: {
        text: (
            <span>
        FEDS201 {new Date().getFullYear()} ©{' '}
                <a href="https://feds201.com" target="_blank">
          CS-Club
        </a>
        .
      </span>
        )
    },
    editLink: {
        text: '',
        component: 'Edit this page on GitHub',
        useLink: () => 'https://github.com/your-repo/edit/master/path/to/file',
    },
    
    banner: {
        key: '1.0-release',
        text: (
            <a href="#">
                🎉 Programmers Handbook 1.0 is released. Read more →
            </a>
        )
    },
    feedback: {
        content: 'Give Feedback',
        labels: 'feedback,documentation',
        useLink: () => 'https://github.com/Rochester-CS-Club/CS-CLUB-WEBSITE/issues/new/',
    },
}