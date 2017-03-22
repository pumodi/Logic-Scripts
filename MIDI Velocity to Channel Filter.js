var PluginParameters = [{name:"Note: Logic uses Velocity 64 as a",type:"text"},
		{name: "note off message. Set Velocity Min and",type:"text"},
		{name:"Max to ignore velocity 64.",type:"text"},
		{name:" Keyswitch #1 ",type:"text"},
		{name:"Midi Channel A",type:"lin",default:1,minValue: 1,maxValue: 16,numberOfSteps: 15},
		{name: "Velocity Min A", type:"lin", defaultValue:1, minValue: 1, maxValue:127, numberOfSteps:126},
		{name: "Velocity Max A", type:"lin", defaultValue:127, minValue: 1, maxValue:127, numberOfSteps:126},
		{name:" Keyswitch #2 ", type:"text"},
		{name:"Midi Channel B",type:"lin",default:1,minValue: 1,maxValue: 16,numberOfSteps: 15},
		{name: "Velocity Min B", type:"lin", defaultValue:1, minValue: 1, maxValue:127, numberOfSteps:126},
		{name: "Velocity Max B", type:"lin", defaultValue:1, minValue: 1, maxValue:127, numberOfSteps:126},
		{name:" Keyswitch #3 ", type:"text"},
		{name:"Midi Channel C",type:"lin",default:1,minValue: 1,maxValue: 16,numberOfSteps: 15},
		{name: "Velocity Min C", type:"lin", defaultValue:1, minValue: 1, maxValue:127, numberOfSteps:126},
		{name: "Velocity Max C", type:"lin", defaultValue:1, minValue: 1, maxValue:127, numberOfSteps:126},
		{name:" Keyswitch #4 ", type:"text"},
		{name:"Midi Channel D",type:"lin",default:1,minValue: 1,maxValue: 16,numberOfSteps: 15},
		{name: "Velocity Min D", type:"lin", defaultValue:1, minValue: 1, maxValue:127, numberOfSteps:126},
		{name: "Velocity Max D", type:"lin", defaultValue:1, minValue: 1, maxValue:127, numberOfSteps:126},];

var savedChannel = 1;

function HandleMIDI(event)
{
	if (event instanceof NoteOff) {
		event.channel = savedChannel;
	}
	if (event instanceof Note)
	{
		if (event.velocity >= GetParameter("Velocity Min A") && event.velocity <= GetParameter("Velocity Max A"))
		{
			savedChannel = GetParameter("Midi Channel A");
			event.channel = savedChannel;
		}
		if (event.velocity >= GetParameter("Velocity Min B") && event.velocity <= GetParameter("Velocity Max B"))
		{
			savedChannel = GetParameter("Midi Channel B");
			event.channel = savedChannel;
		}
		if (event.velocity >= GetParameter("Velocity Min C") && event.velocity <= GetParameter("Velocity Max C"))
		{
			savedChannel = GetParameter("Midi Channel C");
			event.channel = savedChannel;
		}
		if (event.velocity >=   GetParameter("Velocity Min D") && event.velocity <= GetParameter("Velocity Max D"))
		{
			savedChannel = GetParameter("Midi Channel D");
			event.channel = savedChannel;
		}
		event.send();
		event.trace();
	}
}
