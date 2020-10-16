# gamepad-streamer

## why?

Google Stadia is cool, but what about sending controller state to other edge devices. RC cars, drones, or p2p video game!???

## networking

Using webrtc data channels, the controller state is streamed over json to another peer

```
{
  "timestamp": number,
  "axes": [
    number,
    number,
    number,
    number
  ],
  "buttons": [
      {
        pressed: bool,
        touched: bool,
        value: number
      }
   ]
}
```
