This is a repository for scripts I've built to aid me in making music and sound
in Logic Pro X.

Here is a brief overview of what is currently here.

##MIDI Velocity to Channel Filter
This script takes incoming midi events and changes it's midi channel based
on velocity. You can choose the channel to change to and a min/max range of
velocity.

Currently supports 4 keyswitches.

###BUGS!
Currently, you cannot have a note set to velocity 64. Logic uses 64 as
a note off message and will cause notes to hang. The workaround is simply to
not include 64 within your velocity range.
