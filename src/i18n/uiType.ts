export interface uiObject {
    textDirection: string;
    siteDescription: string;

    pageTitles: {
        services: string;
        signUp: string;
        login: string;
        home: string;
        signIn: string;
        createClientAccount: string;
        editClientAccount: string;
        viewClientAccount: string;
        createPost: string;
        createProviderAccount: string;
        editProviderAccount: string;
        viewProviderAccount: string;
        clientViewProviderAccount: string;
        page404: string;
        requestPasswordReset: string;
        resetPassword: string;
        terms: string;
        privacy: string;
        acceptableUse: string;
        about: string;
        impact: string;
        fullPost: string;
        offline: string;
        faq: string;
        viewCart: string;
        popularResources: string;
        shopBySubject: string;
        newResources: string;
        shopByGrade: string;
    };

    pageDescriptions: {
        services: string;
        signUp: string;
        login: string;
        home: string;
        signIn: string;
        createClientAccount: string;
        viewClientAccount: string;
        createPost: string;
        createProviderAccount: string;
        viewProviderAccount: string;
        clientViewProviderAccount: string;
        page404: string;
        requestPasswordReset: string;
        resetPassword: string;
        terms: string;
        privacy: string;
        acceptableUse: string;
        about: string;
        impact: string;
        fullPost: string;
        faq: string;
        viewCart: string;
    };

    buttons: {
        providerProfile: string;
        editProfile: string;
        register: string;
        uploadImage: string;
        uploading: string;
        loading: string;
        login: string;
        signUp: string;
        signIn: string;
        signOut: string;
        returnHome: string;
        reset: string;
        post: string;
        next: string;
        previous: string;
        delete: string;
        contact: string;
        phone: string;
        saveProfile: string;
        filters: string;
        faq: string;
        addToCart: string;
        stripeSetup: string;
        stripeLogin: string;
        proceedToCheckout: string;
        viewCart: string;
        showMore: string;
        showLess: string;
        browseCatalog: string;
        findResources: string;
        download: string;
        follow: string;
        following: string;
        top: string;
        freeDownload: string;
        addedToCart: string;
        finishStripeSetup: string;
        requestStripePayout: string;
    };

  messages: {
    noAccount: string,
    emailValid: string,
    emailLackRequirements: string,
    passwordLength: string,
    passwordValid: string,
    passwordLackRequirements: string, 
    phoneLackRequirements: string,
    phoneValid: string,
    passwordMatch: string,
    passwordReset: string,
    forgotPassword: string,
    alreadyAccount: string,
    error404: string,
    onlyProvider: string,
    signInAsProvider: string,
    checkEmail: string,
    checkConfirmEmail: string,
    signIn: string,
    createProviderAccount: string,
    createClientAccount: string,
    viewProviderAccount: string,
    noPosts: string,
    noPost: string,
    selectAnImage: string,
    noProvider: string,
    translation: string,
    translations: string,
    clickWrap1: string,
    clickWrap2: string,
    fetch: string,
    todoFetch: string,
    mustSignIn: string,
    profileEdits: string,
    noClient: string,
    noPostsSearch: string,
    noStripeAccount: string,
    selectSubject: string,
    comingSoon: string,
    emailNotProvided: string,
    report: string;
    free: string;
    freeResourceCreated: string;
    insufficientStripeBalance: string;
    payoutRequested: string;
    payoutSetup: string;
    requestPayout: string;
    currentBalance: string;
  },


    formLabels: {
        title: string;
        serviceCategory: string;
        postContent: string;
        country: string;
        majorMunicipality: string;
        minorMunicipality: string;
        governingDistrict: string;
        search: string;
        firstName: string;
        lastName: string;
        providerName: string;
        phone: string;
        email: string;
        password: string;
        confirmPassword: string;
        displayName: string;
        enterPostContent: string;
        noValue: string;
        providerInfo: string;
        providerPosts: string;
        posts: string;
        profileInfo: string;
        yourPosts: string;
        optional: string;
        required: string;
        languages: string;
        chooseLanguage: string;
        languagesSpoken: string;
        taxCode: string;
        dropdownDefault: string;
        subjects: string;
        grades: string;
        resourceTypes: string;
        standards: string;
        fileTypes: string;
        chooseSubject: string;
        chooseGrade: string;
        pages: string;
        pricePost: string;
        isResourceFree: string;
        about: string;
        platformSupport: string;
    };

    postLabels: {
        provider: string;
        location: string;
        category: string;
        image: string;
        slide: string;
        providerProfileImage: string;
        clientProfileImage: string;
    };

    cartLabels: {
        product: string;
        quantity: string;
        price: string;
        myCart: string;
        subTotal: string;
        taxes: string;
        total: string;
        emptyCart: string;
        orderSummary: string;
        items: string;
    };

    homePageText: {
        headline: string;
        subHeadline: string;
        ariaLabel: string;
    };

  menus: {
    resources: string;
    contactUs: string;
    profile: string;
    ratingsReviews: string;
    questions: string;
    freeDownload: string;
    providerResources: string;
    payouts: string;
    reviews: string;
    details: string;
    description: string;
     qA: string;
  };

    toolTips: {
        providerPhone: string;
        clientPhone: string;
        firstName: string;
        lastName: string;
        displayName: string;
        profileImage: string;
        changeEmail: string;
        locationUpdate: string;
        postImages: string;
        firstNameEdit: string;
        lastNameEdit: string;
        languages: string;
        subjects: string;
        grades: string;
        contribution: string;
    };

    apiErrors: {
        missingFields: string;
        noSession: string;
        noUser: string;
        providerExists: string;
        profileCreateError: string;
        profileEditError: string;
        noDistrict: string;
        noMinorMunicipality: string;
        noMajorMunicipality: string;
        noCountry: string;
        locationError: string;
        providerCreateProfileError: string;
        providerEditProfileError: string;
        noProfileData: string;
        success: string;
        emailError: string;
        noCategory: string;
        postError: string;
        noPost: string;
        clientExists: string;
        clientCreateProfileError: string;
        clientEditProfileError: string;
        createUserError: string;
        emailNotConfirmed: string;
    };

    socialModal: {
        shareService: string;
        twitterX: string;
        facebook: string;
        WhatsApp: string;
        email: string;
        copyLink: string;
        embedLink: string;
        textLink: string;
        disclaimer: string;
        shareButton: string;
        closeShareMenu: string;
    };

    ariaLabels: {
        todo: string;
        logo: string;
        navigation: string;
        checkboxMajorMunicipality: string;
        checkboxMinorMunicipality: string;
        checkboxGoverningDistrict: string;
        darkMessage: string;
        closeDialog: string;
        cart: string;
        removeFromCart: string;
        increaseQuantity: string;
        decreaseQuantity: string;
        checkboxGrade: string;
    };

    headerData: {
        links: [
            {
                text: string;
                href: string;
            },
            {
                text: string;
                href: string;
            },
        ];
        actions: [];
    };

    footerData: {
        links: [
            // {
            //   title: string,
            //   links: [
            //     { text: string, href: string },
            //     { text: string, href: string },
            //     { text: string, href: string },
            //     { text: string, href: string },
            //     { text: string, href: string },
            //     { text: string, href: string },
            //     { text: string, href: string },
            //   ],
            // },
            // {
            //   title: string,
            //   links: [
            //     { text: string, href: string },
            //     { text: string, href: string },
            //   ],
            // },
            {
                // title: string,
                links: [
                    { text: string; href: string },
                    // { text: string, href: string },
                    // { text: string, href: string },
                    // { text: string, href: string },
                    // { text: string, href: string },
                ];
            },
            {
                // title: string,
                links: [
                    { text: string; href: string },
                    // { text: string, href: string },
                    // { text: string, href: string },
                    // { text: string, href: string },
                    // { text: string, href: string },
                    // { text: string, href: string },
                    // { text: string, href: string },
                ];
            },
        ];
        secondaryLinks: [
            { text: string; href: string },
            { text: string; href: string },
        ];
        socialLinks: [
            // { ariaLabel: string, icon: string, href: string },
            { ariaLabel: string; icon: string; href: string },
            { ariaLabel: string; icon: string; href: string },
            // { ariaLabel: string, icon: string, href: string },
            { ariaLabel: string; icon: string; href: string },
            { ariaLabel: string; icon: string; href: string },
            { ariaLabel: string; icon: string; href: string },
        ];
        footNote: string;
    };

    subjectCategoryInfo: {
        subjects: [
            { name: string; description: string; ariaLabel: string; id: "1" },
            { name: string; description: string; ariaLabel: string; id: "2" },
            { name: string; description: string; ariaLabel: string; id: "3" },
            { name: string; description: string; ariaLabel: string; id: "4" },
            { name: string; description: string; ariaLabel: string; id: "5" },
            { name: string; description: string; ariaLabel: string; id: "6" },
            { name: string; description: string; ariaLabel: string; id: "7" },
            { name: string; description: string; ariaLabel: string; id: "8" },
            // { name: string, description: string, ariaLabel: string, id: "9" },
            // { name: string, description: string, ariaLabel: string, id: "10" },
            // { name: string, description: string, ariaLabel: string, id: "11" },
            // { name: string, description: string, ariaLabel: string, id: "12" },
            // { name: string, description: string, ariaLabel: string, id: "13" },
            // { name: string, description: string, ariaLabel: string, id: "14" },
            // { name: string, description: string, ariaLabel: string, id: "15" },
            // { name: string, description: string, ariaLabel: string, id: "16" },
            // Add more products as needed
        ];
    };

    clearFilters: {
        filterButtons: [
            { text: string; ariaLabel: string },
            { text: string; ariaLabel: string },
            { text: string; ariaLabel: string },
            { text: string; ariaLabel: string },
            { text: string; ariaLabel: string },
        ];
    };
}
