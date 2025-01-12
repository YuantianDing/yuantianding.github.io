#!/usr/bin/env python3.12

import os
import sys
import openai
from pydub import AudioSegment

CLIENT = openai.Client()

def generate_audio(line: str, file_path: str):
    response = CLIENT.audio.speech.create(model="tts-1", input=line, voice="ash")
    response.write_to_file(file_path)

def generate_audio_lines(lines: list[str], file_path: str):
    final_audio = AudioSegment.empty()
    silence = AudioSegment.silent(duration=2000)
    for line in lines:
        generate_audio(line, "/tmp/gen_audio.mp3")
        segment_audio = AudioSegment.from_file("/tmp/gen_audio.mp3")
        final_audio += segment_audio
        final_audio += silence

        os.remove("/tmp/gen_audio.mp3")
    final_audio.export(file_path, format="mp3")
        
        

with open(sys.argv[1]) as f:
    data = f.read()
    lines = data.split('\n\n')
    generate_audio_lines(lines, os.path.join(os.path.dirname(sys.argv[1]), os.path.basename(sys.argv[1]).split('.')[0] + ".mp3"))
    



