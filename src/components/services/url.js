const url = {
    BASE_URL: "https://localhost:7011/api",
    DASHBOARD: {
        
    },

    EMPLOYEE: {
        LIST: "/Employees/Get-all",
        CREATE: "/Employees/Create",
        UPDATE: "/Employees/Edit",
        DETAIL: "/Employees/{}",
        DELETE: "/Employees/Delete",
    },

    AUTH: {
        LOGIN: "/Accounts/SignIn",
        FORGOT_PASSWORD: "/Accounts/ForgotPassword",
        CHANGE_PASSWORD: "/Accounts/ChangePassword",
        RESET_PASSWORD: "/Accounts/ResetPassword",
        PROFILE: ""
    },

    CLIENT:{
        LIST: "/Clients/Get-all",
        UPDATE: "/Clients/Edit",
        DETAIL: "/Clients/{}",
    },

    SERVICE: {
        LIST: "/Services/Get-all",
        CREATE: "/Services/Create",
        UPDATE: "/Services/{}",
        DETAIL: "/Services/{}",
        DELETE: "/Services/{}",
    },

    SERVICE_OFFER: {
        LIST: "/ServiceOffereds/Get-all",
        UPDATE: "/ServiceOffereds/Edit",
        DETAIL: "/ServiceOffereds/{}",
    },

    DEPARTMENT:{
        LIST: "/Departments/Get-all",
        CREATE: "/Departments/Create",
        UPDATE: "/Departments/{}",
        DETAIL: "/Departments/{}",
        DELETE: "/Departments/{}",
    }
}
export default url;
    