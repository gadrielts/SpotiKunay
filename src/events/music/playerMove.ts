import { Client } from "discord.js";
import { Player } from "erela.js";

export default class PlayerMove {
  type: string;
  
  constructor() {
    this.type = 'playerMove'; 
  }

  execute(client: Client<true>, player: Player, oldChannel: string, newChannel: string) {
    if (!newChannel) return player.destroy();
    player.voiceChannel = newChannel;

    if (player.paused) return;
    setTimeout(() => {
      player.pause(true);
      setTimeout(() => player.pause(false), client.ws.ping * 2)
    }, client.ws.ping * 2);
  }
}