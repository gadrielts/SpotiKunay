import { ActivityType, Client, ClientEvents } from "discord.js";

import { DeployCommand } from "../../commands/DeployCommands";

export default class Ready {
  type: keyof ClientEvents;

  constructor() {
    this.type = 'ready';
  }

  async execute(client: Client<true>) {
    client.manager.init(client.user.id);

    await DeployCommand(client);

    await client.user.setActivity({
      name: 'as melhores músicas',
      type: ActivityType.Listening,
    });

    console.log(`[CLIENT] ${client.user.tag} is ready!`);
  }
}