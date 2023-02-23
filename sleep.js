import _sleepController from "@/controllers/nap-time/sleep_controller.js"

 const goodnightEverybody = async () => {
  if(awake) {
    await _sleepController.nitenite();
    return;
  }
 }
