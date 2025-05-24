export const isDev: boolean = false;
export const privateIP = '192.168.10.12';
// export const publicIP = '183.87.218.86';
 export const localIP = 'localhost';
export const appName = "Balasore Intranet Portal.";
export const baseURL =
  process.env.NODE_ENV == "production"
    ? "http://" + privateIP + ":3001"
    : "http://" + localIP + ":3001";
export const liveApiURL = "http://" + privateIP + ":8001";
export const devApiURL = "http://" + localIP + ":8001";
export const apiURL: string = isDev ? devApiURL : liveApiURL;
export const encryptionKey = "23BAL587ASHISrI50PORTcs01l6UIAPP";

export const navLinks = [
  {
    name: 'About Us', submenus: [
      { name: 'Company Profile', link: '/profile' },
      { name: 'Vision, Mission & values', link: '/vision-mission-values' },
    ]
  },
 {
    name: 'Company Policy', submenus: [
      { name: 'HR Policy', link: '/hr-policy' },
      { name: 'CSR Policy', link: '/csr' },
      { name: 'TPM Policy', link: '/tpm' },
      { name: 'SHE Policy', link: '/she' },
    ]
  },
  {
    name: 'KPI Dashboard', submenus: [
      { name: 'Finance', link: '/finance' },
      { name: 'SCM', link: '/scm' },
      { name: 'CRM', link: '/crm' },
      { name: 'HR', link: '/hr' },
      { name: 'Business Excellence', link: '/business-excellence' },
    ]
  },
  {
    name: 'Employee Attendance', link: '/employee-attendance'
  },
]