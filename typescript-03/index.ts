// // type Config = { protocol: 'http' | 'https'; port: 3000 | 3001 };

// interface Config {
//   protocol: 'http' | 'https';
//   port: 3000 | 3001;
//   log: (msg: string) => void;
// }

// // type Role = { role: string };

// interface Role {
//   role: string;
// }

// // type ConfigWithRole = Config & Role;
// interface ConfigWithRole extends Config, Role {}

// const serverConfig: ConfigWithRole = {
//   protocol: 'https',
//   port: 3001,
//   role: 'admin',
//   log: (msg: string): void => console.log(msg),
// };

// // const backupConfig: ConfigWithRole = {
// //   protocol: 'https',
// //   port: 3000,
// //   role: 'sysadmin',
// // };

// type StartFunction = (
//   protocol: 'http' | 'https',
//   port: 3000 | 3001,
//   log: (msg: string) => void
// ) => string;

// const startServer: StartFunction = (
//   protocol: 'http' | 'https',
//   port: 3000 | 3001,
//   log: (msg: string) => void
// ): 'Server started' => {
//   log(`Server started on ${protocol}://server:${port}`);
//   return 'Server started';
// };
// startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

// interface Styles {
//   [key: string]: string;
// }

// const styles: Styles = {
//   position: 'absolute',
//   top: '20px',
//   left: '50px',
// };

const serverNewConfig: BasicConfig = {
  protocol: 'https',
  port: 3001,
  // role: 'admin',
};

const backupConfig: BasicConfig = {
  protocol: 'https',
  port: 3000,
};

interface BasicConfig {
  protocol: string;
  port: number;
}

const startNewServer = (config: BasicConfig): 'Server started' => {
  console.log(`Server started on ${config.protocol}://server:${config.port}`);
  return 'Server started';
};
startNewServer(serverNewConfig);
startNewServer(backupConfig);
