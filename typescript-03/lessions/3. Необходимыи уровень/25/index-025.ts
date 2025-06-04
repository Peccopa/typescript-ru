{
  // type Config = { protocol: 'http' | 'https'; port: 3000 | 3001 };

  type TProtocol = 'http' | 'https';

  interface IConfig {
    protocol: TProtocol;
    port: 3000 | 3001;
    log: (msg: string) => void;
  }

  interface IConfig {
    data: Date;
  }

  // type Role = { role: string };

  interface IRole {
    role: string;
  }

  // type ConfigWithRole = Config & Role;
  interface IConfigWithRole extends IConfig, IRole {}

  const serverConfig: IConfigWithRole = {
    protocol: 'https',
    port: 3001,
    role: 'admin',
    data: new Date(),
    log: (msg: string): void => console.log(msg),
  };

  // const backupConfig: IConfigWithRole = {
  //   protocol: 'https',
  //   port: 3000,
  //   role: 'sysadmin',
  // };

  type StartFunction = (
    protocol: 'http' | 'https',
    port: 3000 | 3001,
    log: (msg: string) => void
  ) => string;

  const startServer: StartFunction = (
    protocol: 'http' | 'https',
    port: 3000 | 3001,
    log: (msg: string) => void
  ): 'Server started' => {
    log(`Server started on ${protocol}://server:${port}`);
    return 'Server started';
  };
  startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

  interface IStyles {
    [key: string]: string;
  }

  const styles: IStyles = {
    position: 'absolute',
    top: '20px',
    left: '50px',
  };

  const serverNewConfig: BasicConfig = {
    protocol: 'https',
    port: 3001,
    // role: 'admin',
  };

  const backupConfig: BasicConfig = {
    protocol: 'https',
    port: 3000,
  };

  interface IBasicConfig {
    protocol: string;
    port: number;
  }

  const startNewServer = (config: BasicConfig): 'Server started' => {
    console.log(`Server started on ${config.protocol}://server:${config.port}`);
    return 'Server started';
  };
  startNewServer(serverNewConfig);
  startNewServer(backupConfig);
}
