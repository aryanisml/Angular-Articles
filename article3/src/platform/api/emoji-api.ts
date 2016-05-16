/**
This source is based on the original emoji.json file from "gemoji Project".
URL: https://github.com/github/gemoji

Below is the original license file [URL: https://github.com/github/gemoji/blob/master/LICENSE]

Changes made by me (@brakmic):
         * converted the original emojis-JSON to JS-array.
         * added "getEmoji" method to select emojis based on their aliases
         * exported a simple API
**/

/*
octocat, squirrel, shipit
Copyright(c) 2013 GitHub Inc.All rights reserved.

  bowtie, neckbeard, fu
Copyright(c) 2013 37signals, LLC.All rights reserved.

  feelsgood, finnadie, goberserk, godmode, hurtrealbad, rage 1- 4, suspect
Copyright(c) 2013 id Software.All rights reserved.

  trollface
Copyright(c) 2013 whynne@deviantart.All rights reserved.

All other images
Copyright(c) 2013 Apple Inc.All rights reserved.

Source code:

Copyright(c) 2013 GitHub, Inc.

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files(the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
  copy, modify, merge, publish, distribute, sublicense, and / or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/

const _ = require('underscore');

const emojis = [
  {
    'emoji': '😄'
    , 'description': 'smiling face with open mouth and smiling eyes'
    , 'aliases': [
      'smile'
    ]
    , 'tags': [
      'happy'
      , 'joy'
      , 'pleased'
    ]
  }
  , {
    'emoji': '😃'
    , 'description': 'smiling face with open mouth'
    , 'aliases': [
      'smiley'
    ]
    , 'tags': [
      'happy'
      , 'joy'
      , 'haha'
    ]
  }
  , {
    'emoji': '😀'
    , 'description': 'grinning face'
    , 'aliases': [
      'grinning'
    ]
    , 'tags': [
      'smile'
      , 'happy'
    ]
  }
  , {
    'emoji': '😊'
    , 'description': 'smiling face with smiling eyes'
    , 'aliases': [
      'blush'
    ]
    , 'tags': [
      'proud'
    ]
  }
  , {
    'emoji': '☺️'
    , 'description': 'white smiling face'
    , 'aliases': [
      'relaxed'
    ]
    , 'tags': [
      'blush'
      , 'pleased'
    ]
  }
  , {
    'emoji': '😉'
    , 'description': 'winking face'
    , 'aliases': [
      'wink'
    ]
    , 'tags': [
      'flirt'
    ]
  }
  , {
    'emoji': '😍'
    , 'description': 'smiling face with heart-shaped eyes'
    , 'aliases': [
      'heart_eyes'
    ]
    , 'tags': [
      'love'
      , 'crush'
    ]
  }
  , {
    'emoji': '😘'
    , 'description': 'face throwing a kiss'
    , 'aliases': [
      'kissing_heart'
    ]
    , 'tags': [
      'flirt'
    ]
  }
  , {
    'emoji': '😚'
    , 'description': 'kissing face with closed eyes'
    , 'aliases': [
      'kissing_closed_eyes'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '😗'
    , 'description': 'kissing face'
    , 'aliases': [
      'kissing'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '😙'
    , 'description': 'kissing face with smiling eyes'
    , 'aliases': [
      'kissing_smiling_eyes'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '😜'
    , 'description': 'face with stuck-out tongue and winking eye'
    , 'aliases': [
      'stuck_out_tongue_winking_eye'
    ]
    , 'tags': [
      'prank'
      , 'silly'
    ]
  }
  , {
    'emoji': '😝'
    , 'description': 'face with stuck-out tongue and tightly-closed eyes'
    , 'aliases': [
      'stuck_out_tongue_closed_eyes'
    ]
    , 'tags': [
      'prank'
    ]
  }
  , {
    'emoji': '😛'
    , 'description': 'face with stuck-out tongue'
    , 'aliases': [
      'stuck_out_tongue'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '😳'
    , 'description': 'flushed face'
    , 'aliases': [
      'flushed'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '😁'
    , 'description': 'grinning face with smiling eyes'
    , 'aliases': [
      'grin'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '😔'
    , 'description': 'pensive face'
    , 'aliases': [
      'pensive'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '😌'
    , 'description': 'relieved face'
    , 'aliases': [
      'relieved'
    ]
    , 'tags': [
      'whew'
    ]
  }
  , {
    'emoji': '😒'
    , 'description': 'unamused face'
    , 'aliases': [
      'unamused'
    ]
    , 'tags': [
      'meh'
    ]
  }
  , {
    'emoji': '😞'
    , 'description': 'disappointed face'
    , 'aliases': [
      'disappointed'
    ]
    , 'tags': [
      'sad'
    ]
  }
  , {
    'emoji': '😣'
    , 'description': 'persevering face'
    , 'aliases': [
      'persevere'
    ]
    , 'tags': [
      'struggling'
    ]
  }
  , {
    'emoji': '😢'
    , 'description': 'crying face'
    , 'aliases': [
      'cry'
    ]
    , 'tags': [
      'sad'
      , 'tear'
    ]
  }
  , {
    'emoji': '😂'
    , 'description': 'face with tears of joy'
    , 'aliases': [
      'joy'
    ]
    , 'tags': [
      'tears'
    ]
  }
  , {
    'emoji': '😭'
    , 'description': 'loudly crying face'
    , 'aliases': [
      'sob'
    ]
    , 'tags': [
      'sad'
      , 'cry'
      , 'bawling'
    ]
  }
  , {
    'emoji': '😪'
    , 'description': 'sleepy face'
    , 'aliases': [
      'sleepy'
    ]
    , 'tags': [
      'tired'
    ]
  }
  , {
    'emoji': '😥'
    , 'description': 'disappointed but relieved face'
    , 'aliases': [
      'disappointed_relieved'
    ]
    , 'tags': [
      'phew'
      , 'sweat'
      , 'nervous'
    ]
  }
  , {
    'emoji': '😰'
    , 'description': 'face with open mouth and cold sweat'
    , 'aliases': [
      'cold_sweat'
    ]
    , 'tags': [
      'nervous'
    ]
  }
  , {
    'emoji': '😅'
    , 'description': 'smiling face with open mouth and cold sweat'
    , 'aliases': [
      'sweat_smile'
    ]
    , 'tags': [
      'hot'
    ]
  }
  , {
    'emoji': '😓'
    , 'description': 'face with cold sweat'
    , 'aliases': [
      'sweat'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '😩'
    , 'description': 'weary face'
    , 'aliases': [
      'weary'
    ]
    , 'tags': [
      'tired'
    ]
  }
  , {
    'emoji': '😫'
    , 'description': 'tired face'
    , 'aliases': [
      'tired_face'
    ]
    , 'tags': [
      'upset'
      , 'whine'
    ]
  }
  , {
    'emoji': '😨'
    , 'description': 'fearful face'
    , 'aliases': [
      'fearful'
    ]
    , 'tags': [
      'scared'
      , 'shocked'
      , 'oops'
    ]
  }
  , {
    'emoji': '😱'
    , 'description': 'face screaming in fear'
    , 'aliases': [
      'scream'
    ]
    , 'tags': [
      'horror'
      , 'shocked'
    ]
  }
  , {
    'emoji': '😠'
    , 'description': 'angry face'
    , 'aliases': [
      'angry'
    ]
    , 'tags': [
      'mad'
      , 'annoyed'
    ]
  }
  , {
    'emoji': '😡'
    , 'description': 'pouting face'
    , 'aliases': [
      'rage'
      , 'pout'
    ]
    , 'tags': [
      'angry'
    ]
  }
  , {
    'emoji': '😤'
    , 'description': 'face with look of triumph'
    , 'aliases': [
      'triumph'
    ]
    , 'tags': [
      'smug'
    ]
  }
  , {
    'emoji': '😖'
    , 'description': 'confounded face'
    , 'aliases': [
      'confounded'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '😆'
    , 'description': 'smiling face with open mouth and tightly-closed eyes'
    , 'aliases': [
      'laughing'
      , 'satisfied'
    ]
    , 'tags': [
      'happy'
      , 'haha'
    ]
  }
  , {
    'emoji': '😋'
    , 'description': 'face savouring delicious food'
    , 'aliases': [
      'yum'
    ]
    , 'tags': [
      'tongue'
      , 'lick'
    ]
  }
  , {
    'emoji': '😷'
    , 'description': 'face with medical mask'
    , 'aliases': [
      'mask'
    ]
    , 'tags': [
      'sick'
      , 'ill'
    ]
  }
  , {
    'emoji': '😎'
    , 'description': 'smiling face with sunglasses'
    , 'aliases': [
      'sunglasses'
    ]
    , 'tags': [
      'cool'
    ]
  }
  , {
    'emoji': '😴'
    , 'description': 'sleeping face'
    , 'aliases': [
      'sleeping'
    ]
    , 'tags': [
      'zzz'
    ]
  }
  , {
    'emoji': '😵'
    , 'description': 'dizzy face'
    , 'aliases': [
      'dizzy_face'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '😲'
    , 'description': 'astonished face'
    , 'aliases': [
      'astonished'
    ]
    , 'tags': [
      'amazed'
      , 'gasp'
    ]
  }
  , {
    'emoji': '😟'
    , 'description': 'worried face'
    , 'aliases': [
      'worried'
    ]
    , 'tags': [
      'nervous'
    ]
  }
  , {
    'emoji': '😦'
    , 'description': 'frowning face with open mouth'
    , 'aliases': [
      'frowning'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '😧'
    , 'description': 'anguished face'
    , 'aliases': [
      'anguished'
    ]
    , 'tags': [
      'stunned'
    ]
  }
  , {
    'emoji': '😈'
    , 'description': 'smiling face with horns'
    , 'aliases': [
      'smiling_imp'
    ]
    , 'tags': [
      'devil'
      , 'evil'
      , 'horns'
    ]
  }
  , {
    'emoji': '👿'
    , 'description': 'imp'
    , 'aliases': [
      'imp'
    ]
    , 'tags': [
      'angry'
      , 'devil'
      , 'evil'
      , 'horns'
    ]
  }
  , {
    'emoji': '😮'
    , 'description': 'face with open mouth'
    , 'aliases': [
      'open_mouth'
    ]
    , 'tags': [
      'surprise'
      , 'impressed'
      , 'wow'
    ]
  }
  , {
    'emoji': '😬'
    , 'description': 'grimacing face'
    , 'aliases': [
      'grimacing'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '😐'
    , 'description': 'neutral face'
    , 'aliases': [
      'neutral_face'
    ]
    , 'tags': [
      'meh'
    ]
  }
  , {
    'emoji': '😕'
    , 'description': 'confused face'
    , 'aliases': [
      'confused'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '😯'
    , 'description': 'hushed face'
    , 'aliases': [
      'hushed'
    ]
    , 'tags': [
      'silence'
      , 'speechless'
    ]
  }
  , {
    'emoji': '😶'
    , 'description': 'face without mouth'
    , 'aliases': [
      'no_mouth'
    ]
    , 'tags': [
      'mute'
      , 'silence'
    ]
  }
  , {
    'emoji': '😇'
    , 'description': 'smiling face with halo'
    , 'aliases': [
      'innocent'
    ]
    , 'tags': [
      'angel'
    ]
  }
  , {
    'emoji': '😏'
    , 'description': 'smirking face'
    , 'aliases': [
      'smirk'
    ]
    , 'tags': [
      'smug'
    ]
  }
  , {
    'emoji': '😑'
    , 'description': 'expressionless face'
    , 'aliases': [
      'expressionless'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '👲'
    , 'description': 'man with gua pi mao'
    , 'aliases': [
      'man_with_gua_pi_mao'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '👳'
    , 'description': 'man with turban'
    , 'aliases': [
      'man_with_turban'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '👮'
    , 'description': 'police officer'
    , 'aliases': [
      'cop'
    ]
    , 'tags': [
      'police'
      , 'law'
    ]
  }
  , {
    'emoji': '👷'
    , 'description': 'construction worker'
    , 'aliases': [
      'construction_worker'
    ]
    , 'tags': [
      'helmet'
    ]
  }
  , {
    'emoji': '💂'
    , 'description': 'guardsman'
    , 'aliases': [
      'guardsman'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '👶'
    , 'description': 'baby'
    , 'aliases': [
      'baby'
    ]
    , 'tags': [
      'child'
      , 'newborn'
    ]
  }
  , {
    'emoji': '👦'
    , 'description': 'boy'
    , 'aliases': [
      'boy'
    ]
    , 'tags': [
      'child'
    ]
  }
  , {
    'emoji': '👧'
    , 'description': 'girl'
    , 'aliases': [
      'girl'
    ]
    , 'tags': [
      'child'
    ]
  }
  , {
    'emoji': '👨'
    , 'description': 'man'
    , 'aliases': [
      'man'
    ]
    , 'tags': [
      'mustache'
      , 'father'
      , 'dad'
    ]
  }
  , {
    'emoji': '👩'
    , 'description': 'woman'
    , 'aliases': [
      'woman'
    ]
    , 'tags': [
      'girls'
    ]
  }
  , {
    'emoji': '👴'
    , 'description': 'older man'
    , 'aliases': [
      'older_man'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '👵'
    , 'description': 'older woman'
    , 'aliases': [
      'older_woman'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '👱'
    , 'description': 'person with blond hair'
    , 'aliases': [
      'person_with_blond_hair'
    ]
    , 'tags': [
      'boy'
    ]
  }
  , {
    'emoji': '👼'
    , 'description': 'baby angel'
    , 'aliases': [
      'angel'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '👸'
    , 'description': 'princess'
    , 'aliases': [
      'princess'
    ]
    , 'tags': [
      'blonde'
      , 'crown'
      , 'royal'
    ]
  }
  , {
    'emoji': '😺'
    , 'description': 'smiling cat face with open mouth'
    , 'aliases': [
      'smiley_cat'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '😸'
    , 'description': 'grinning cat face with smiling eyes'
    , 'aliases': [
      'smile_cat'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '😻'
    , 'description': 'smiling cat face with heart-shaped eyes'
    , 'aliases': [
      'heart_eyes_cat'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '😽'
    , 'description': 'kissing cat face with closed eyes'
    , 'aliases': [
      'kissing_cat'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '😼'
    , 'description': 'cat face with wry smile'
    , 'aliases': [
      'smirk_cat'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🙀'
    , 'description': 'weary cat face'
    , 'aliases': [
      'scream_cat'
    ]
    , 'tags': [
      'horror'
    ]
  }
  , {
    'emoji': '😿'
    , 'description': 'crying cat face'
    , 'aliases': [
      'crying_cat_face'
    ]
    , 'tags': [
      'sad'
      , 'tear'
    ]
  }
  , {
    'emoji': '😹'
    , 'description': 'cat face with tears of joy'
    , 'aliases': [
      'joy_cat'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '😾'
    , 'description': 'pouting cat face'
    , 'aliases': [
      'pouting_cat'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '👹'
    , 'description': 'japanese ogre'
    , 'aliases': [
      'japanese_ogre'
    ]
    , 'tags': [
      'monster'
    ]
  }
  , {
    'emoji': '👺'
    , 'description': 'japanese goblin'
    , 'aliases': [
      'japanese_goblin'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🙈'
    , 'description': 'see-no-evil monkey'
    , 'aliases': [
      'see_no_evil'
    ]
    , 'tags': [
      'monkey'
      , 'blind'
      , 'ignore'
    ]
  }
  , {
    'emoji': '🙉'
    , 'description': 'hear-no-evil monkey'
    , 'aliases': [
      'hear_no_evil'
    ]
    , 'tags': [
      'monkey'
      , 'deaf'
    ]
  }
  , {
    'emoji': '🙊'
    , 'description': 'speak-no-evil monkey'
    , 'aliases': [
      'speak_no_evil'
    ]
    , 'tags': [
      'monkey'
      , 'mute'
      , 'hush'
    ]
  }
  , {
    'emoji': '💀'
    , 'description': 'skull'
    , 'aliases': [
      'skull'
    ]
    , 'tags': [
      'dead'
      , 'danger'
      , 'poison'
    ]
  }
  , {
    'emoji': '👽'
    , 'description': 'extraterrestrial alien'
    , 'aliases': [
      'alien'
    ]
    , 'tags': [
      'ufo'
    ]
  }
  , {
    'emoji': '💩'
    , 'description': 'pile of poo'
    , 'aliases': [
      'hankey'
      , 'poop'
      , 'shit'
    ]
    , 'tags': [
      'crap'
    ]
  }
  , {
    'emoji': '🔥'
    , 'description': 'fire'
    , 'aliases': [
      'fire'
    ]
    , 'tags': [
      'burn'
    ]
  }
  , {
    'emoji': '✨'
    , 'description': 'sparkles'
    , 'aliases': [
      'sparkles'
    ]
    , 'tags': [
      'shiny'
    ]
  }
  , {
    'emoji': '🌟'
    , 'description': 'glowing star'
    , 'aliases': [
      'star2'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💫'
    , 'description': 'dizzy symbol'
    , 'aliases': [
      'dizzy'
    ]
    , 'tags': [
      'star'
    ]
  }
  , {
    'emoji': '💥'
    , 'description': 'collision symbol'
    , 'aliases': [
      'boom'
      , 'collision'
    ]
    , 'tags': [
      'explode'
    ]
  }
  , {
    'emoji': '💢'
    , 'description': 'anger symbol'
    , 'aliases': [
      'anger'
    ]
    , 'tags': [
      'angry'
    ]
  }
  , {
    'emoji': '💦'
    , 'description': 'splashing sweat symbol'
    , 'aliases': [
      'sweat_drops'
    ]
    , 'tags': [
      'water'
      , 'workout'
    ]
  }
  , {
    'emoji': '💧'
    , 'description': 'droplet'
    , 'aliases': [
      'droplet'
    ]
    , 'tags': [
      'water'
    ]
  }
  , {
    'emoji': '💤'
    , 'description': 'sleeping symbol'
    , 'aliases': [
      'zzz'
    ]
    , 'tags': [
      'sleeping'
    ]
  }
  , {
    'emoji': '💨'
    , 'description': 'dash symbol'
    , 'aliases': [
      'dash'
    ]
    , 'tags': [
      'wind'
      , 'blow'
      , 'fast'
    ]
  }
  , {
    'emoji': '👂'
    , 'description': 'ear'
    , 'aliases': [
      'ear'
    ]
    , 'tags': [
      'hear'
      , 'sound'
      , 'listen'
    ]
  }
  , {
    'emoji': '👀'
    , 'description': 'eyes'
    , 'aliases': [
      'eyes'
    ]
    , 'tags': [
      'look'
      , 'see'
      , 'watch'
    ]
  }
  , {
    'emoji': '👃'
    , 'description': 'nose'
    , 'aliases': [
      'nose'
    ]
    , 'tags': [
      'smell'
    ]
  }
  , {
    'emoji': '👅'
    , 'description': 'tongue'
    , 'aliases': [
      'tongue'
    ]
    , 'tags': [
      'taste'
    ]
  }
  , {
    'emoji': '👄'
    , 'description': 'mouth'
    , 'aliases': [
      'lips'
    ]
    , 'tags': [
      'kiss'
    ]
  }
  , {
    'emoji': '👍'
    , 'description': 'thumbs up sign'
    , 'aliases': [
      '+1'
      , 'thumbsup'
    ]
    , 'tags': [
      'approve'
      , 'ok'
    ]
  }
  , {
    'emoji': '👎'
    , 'description': 'thumbs down sign'
    , 'aliases': [
      '-1'
      , 'thumbsdown'
    ]
    , 'tags': [
      'disapprove'
      , 'bury'
    ]
  }
  , {
    'emoji': '👌'
    , 'description': 'ok hand sign'
    , 'aliases': [
      'ok_hand'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '👊'
    , 'description': 'fisted hand sign'
    , 'aliases': [
      'facepunch'
      , 'punch'
    ]
    , 'tags': [
      'attack'
    ]
  }
  , {
    'emoji': '✊'
    , 'description': 'raised fist'
    , 'aliases': [
      'fist'
    ]
    , 'tags': [
      'power'
    ]
  }
  , {
    'emoji': '✌️'
    , 'description': 'victory hand'
    , 'aliases': [
      'v'
    ]
    , 'tags': [
      'victory'
      , 'peace'
    ]
  }
  , {
    'emoji': '👋'
    , 'description': 'waving hand sign'
    , 'aliases': [
      'wave'
    ]
    , 'tags': [
      'goodbye'
    ]
  }
  , {
    'emoji': '✋'
    , 'description': 'raised hand'
    , 'aliases': [
      'hand'
      , 'raised_hand'
    ]
    , 'tags': [
      'highfive'
      , 'stop'
    ]
  }
  , {
    'emoji': '👐'
    , 'description': 'open hands sign'
    , 'aliases': [
      'open_hands'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '👆'
    , 'description': 'white up pointing backhand index'
    , 'aliases': [
      'point_up_2'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '👇'
    , 'description': 'white down pointing backhand index'
    , 'aliases': [
      'point_down'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '👉'
    , 'description': 'white right pointing backhand index'
    , 'aliases': [
      'point_right'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '👈'
    , 'description': 'white left pointing backhand index'
    , 'aliases': [
      'point_left'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🙌'
    , 'description': 'person raising both hands in celebration'
    , 'aliases': [
      'raised_hands'
    ]
    , 'tags': [
      'hooray'
    ]
  }
  , {
    'emoji': '🙏'
    , 'description': 'person with folded hands'
    , 'aliases': [
      'pray'
    ]
    , 'tags': [
      'please'
      , 'hope'
      , 'wish'
    ]
  }
  , {
    'emoji': '☝️'
    , 'description': 'white up pointing index'
    , 'aliases': [
      'point_up'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '👏'
    , 'description': 'clapping hands sign'
    , 'aliases': [
      'clap'
    ]
    , 'tags': [
      'praise'
      , 'applause'
    ]
  }
  , {
    'emoji': '💪'
    , 'description': 'flexed biceps'
    , 'aliases': [
      'muscle'
    ]
    , 'tags': [
      'flex'
      , 'bicep'
      , 'strong'
      , 'workout'
    ]
  }
  , {
    'emoji': '🚶'
    , 'description': 'pedestrian'
    , 'aliases': [
      'walking'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🏃'
    , 'description': 'runner'
    , 'aliases': [
      'runner'
      , 'running'
    ]
    , 'tags': [
      'exercise'
      , 'workout'
      , 'marathon'
    ]
  }
  , {
    'emoji': '💃'
    , 'description': 'dancer'
    , 'aliases': [
      'dancer'
    ]
    , 'tags': [
      'dress'
    ]
  }
  , {
    'emoji': '👫'
    , 'description': 'man and woman holding hands'
    , 'aliases': [
      'couple'
    ]
    , 'tags': [
      'date'
    ]
  }
  , {
    'emoji': '👪'
    , 'description': 'family'
    , 'aliases': [
      'family'
    ]
    , 'tags': [
      'home'
      , 'parents'
      , 'child'
    ]
  }
  , {
    'emoji': '👬'
    , 'description': 'two men holding hands'
    , 'aliases': [
      'two_men_holding_hands'
    ]
    , 'tags': [
      'couple'
      , 'date'
    ]
  }
  , {
    'emoji': '👭'
    , 'description': 'two women holding hands'
    , 'aliases': [
      'two_women_holding_hands'
    ]
    , 'tags': [
      'couple'
      , 'date'
    ]
  }
  , {
    'emoji': '💏'
    , 'description': 'kiss'
    , 'aliases': [
      'couplekiss'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💑'
    , 'description': 'couple with heart'
    , 'aliases': [
      'couple_with_heart'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '👯'
    , 'description': 'woman with bunny ears'
    , 'aliases': [
      'dancers'
    ]
    , 'tags': [
      'bunny'
    ]
  }
  , {
    'emoji': '🙆'
    , 'description': 'face with ok gesture'
    , 'aliases': [
      'ok_woman'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🙅'
    , 'description': 'face with no good gesture'
    , 'aliases': [
      'no_good'
      , 'ng_woman'
    ]
    , 'tags': [
      'stop'
      , 'halt'
    ]
  }
  , {
    'emoji': '💁'
    , 'description': 'information desk person'
    , 'aliases': [
      'information_desk_person'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🙋'
    , 'description': 'happy person raising one hand'
    , 'aliases': [
      'raising_hand'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💆'
    , 'description': 'face massage'
    , 'aliases': [
      'massage'
    ]
    , 'tags': [
      'spa'
    ]
  }
  , {
    'emoji': '💇'
    , 'description': 'haircut'
    , 'aliases': [
      'haircut'
    ]
    , 'tags': [
      'beauty'
    ]
  }
  , {
    'emoji': '💅'
    , 'description': 'nail polish'
    , 'aliases': [
      'nail_care'
    ]
    , 'tags': [
      'beauty'
      , 'manicure'
    ]
  }
  , {
    'emoji': '👰'
    , 'description': 'bride with veil'
    , 'aliases': [
      'bride_with_veil'
    ]
    , 'tags': [
      'marriage'
      , 'wedding'
    ]
  }
  , {
    'emoji': '🙎'
    , 'description': 'person with pouting face'
    , 'aliases': [
      'person_with_pouting_face'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🙍'
    , 'description': 'person frowning'
    , 'aliases': [
      'person_frowning'
    ]
    , 'tags': [
      'sad'
    ]
  }
  , {
    'emoji': '🙇'
    , 'description': 'person bowing deeply'
    , 'aliases': [
      'bow'
    ]
    , 'tags': [
      'respect'
      , 'thanks'
    ]
  }
  , {
    'emoji': '🎩'
    , 'description': 'top hat'
    , 'aliases': [
      'tophat'
    ]
    , 'tags': [
      'hat'
      , 'classy'
    ]
  }
  , {
    'emoji': '👑'
    , 'description': 'crown'
    , 'aliases': [
      'crown'
    ]
    , 'tags': [
      'king'
      , 'queen'
      , 'royal'
    ]
  }
  , {
    'emoji': '👒'
    , 'description': 'womans hat'
    , 'aliases': [
      'womans_hat'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '👟'
    , 'description': 'athletic shoe'
    , 'aliases': [
      'athletic_shoe'
    ]
    , 'tags': [
      'sneaker'
      , 'sport'
      , 'running'
    ]
  }
  , {
    'emoji': '👞'
    , 'description': 'mans shoe'
    , 'aliases': [
      'mans_shoe'
      , 'shoe'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '👡'
    , 'description': 'womans sandal'
    , 'aliases': [
      'sandal'
    ]
    , 'tags': [
      'shoe'
    ]
  }
  , {
    'emoji': '👠'
    , 'description': 'high-heeled shoe'
    , 'aliases': [
      'high_heel'
    ]
    , 'tags': [
      'shoe'
    ]
  }
  , {
    'emoji': '👢'
    , 'description': 'womans boots'
    , 'aliases': [
      'boot'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '👕'
    , 'description': 't-shirt'
    , 'aliases': [
      'shirt'
      , 'tshirt'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '👔'
    , 'description': 'necktie'
    , 'aliases': [
      'necktie'
    ]
    , 'tags': [
      'shirt'
      , 'formal'
    ]
  }
  , {
    'emoji': '👚'
    , 'description': 'womans clothes'
    , 'aliases': [
      'womans_clothes'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '👗'
    , 'description': 'dress'
    , 'aliases': [
      'dress'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎽'
    , 'description': 'running shirt with sash'
    , 'aliases': [
      'running_shirt_with_sash'
    ]
    , 'tags': [
      'marathon'
    ]
  }
  , {
    'emoji': '👖'
    , 'description': 'jeans'
    , 'aliases': [
      'jeans'
    ]
    , 'tags': [
      'pants'
    ]
  }
  , {
    'emoji': '👘'
    , 'description': 'kimono'
    , 'aliases': [
      'kimono'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '👙'
    , 'description': 'bikini'
    , 'aliases': [
      'bikini'
    ]
    , 'tags': [
      'beach'
    ]
  }
  , {
    'emoji': '💼'
    , 'description': 'briefcase'
    , 'aliases': [
      'briefcase'
    ]
    , 'tags': [
      'business'
    ]
  }
  , {
    'emoji': '👜'
    , 'description': 'handbag'
    , 'aliases': [
      'handbag'
    ]
    , 'tags': [
      'bag'
    ]
  }
  , {
    'emoji': '👝'
    , 'description': 'pouch'
    , 'aliases': [
      'pouch'
    ]
    , 'tags': [
      'bag'
    ]
  }
  , {
    'emoji': '👛'
    , 'description': 'purse'
    , 'aliases': [
      'purse'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '👓'
    , 'description': 'eyeglasses'
    , 'aliases': [
      'eyeglasses'
    ]
    , 'tags': [
      'glasses'
    ]
  }
  , {
    'emoji': '🎀'
    , 'description': 'ribbon'
    , 'aliases': [
      'ribbon'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌂'
    , 'description': 'closed umbrella'
    , 'aliases': [
      'closed_umbrella'
    ]
    , 'tags': [
      'weather'
      , 'rain'
    ]
  }
  , {
    'emoji': '💄'
    , 'description': 'lipstick'
    , 'aliases': [
      'lipstick'
    ]
    , 'tags': [
      'makeup'
    ]
  }
  , {
    'emoji': '💛'
    , 'description': 'yellow heart'
    , 'aliases': [
      'yellow_heart'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💙'
    , 'description': 'blue heart'
    , 'aliases': [
      'blue_heart'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💜'
    , 'description': 'purple heart'
    , 'aliases': [
      'purple_heart'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💚'
    , 'description': 'green heart'
    , 'aliases': [
      'green_heart'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '❤️'
    , 'description': 'heavy black heart'
    , 'aliases': [
      'heart'
    ]
    , 'tags': [
      'love'
    ]
  }
  , {
    'emoji': '💔'
    , 'description': 'broken heart'
    , 'aliases': [
      'broken_heart'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💗'
    , 'description': 'growing heart'
    , 'aliases': [
      'heartpulse'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💓'
    , 'description': 'beating heart'
    , 'aliases': [
      'heartbeat'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💕'
    , 'description': 'two hearts'
    , 'aliases': [
      'two_hearts'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💖'
    , 'description': 'sparkling heart'
    , 'aliases': [
      'sparkling_heart'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💞'
    , 'description': 'revolving hearts'
    , 'aliases': [
      'revolving_hearts'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💘'
    , 'description': 'heart with arrow'
    , 'aliases': [
      'cupid'
    ]
    , 'tags': [
      'love'
      , 'heart'
    ]
  }
  , {
    'emoji': '💌'
    , 'description': 'love letter'
    , 'aliases': [
      'love_letter'
    ]
    , 'tags': [
      'email'
      , 'envelope'
    ]
  }
  , {
    'emoji': '💋'
    , 'description': 'kiss mark'
    , 'aliases': [
      'kiss'
    ]
    , 'tags': [
      'lipstick'
    ]
  }
  , {
    'emoji': '💍'
    , 'description': 'ring'
    , 'aliases': [
      'ring'
    ]
    , 'tags': [
      'wedding'
      , 'marriage'
      , 'engaged'
    ]
  }
  , {
    'emoji': '💎'
    , 'description': 'gem stone'
    , 'aliases': [
      'gem'
    ]
    , 'tags': [
      'diamond'
    ]
  }
  , {
    'emoji': '👤'
    , 'description': 'bust in silhouette'
    , 'aliases': [
      'bust_in_silhouette'
    ]
    , 'tags': [
      'user'
    ]
  }
  , {
    'emoji': '👥'
    , 'description': 'busts in silhouette'
    , 'aliases': [
      'busts_in_silhouette'
    ]
    , 'tags': [
      'users'
      , 'group'
      , 'team'
    ]
  }
  , {
    'emoji': '💬'
    , 'description': 'speech balloon'
    , 'aliases': [
      'speech_balloon'
    ]
    , 'tags': [
      'comment'
    ]
  }
  , {
    'emoji': '👣'
    , 'description': 'footprints'
    , 'aliases': [
      'footprints'
    ]
    , 'tags': [
      'feet'
      , 'tracks'
    ]
  }
  , {
    'emoji': '💭'
    , 'description': 'thought balloon'
    , 'aliases': [
      'thought_balloon'
    ]
    , 'tags': [
      'thinking'
    ]
  }
  , {
    'emoji': '🐶'
    , 'description': 'dog face'
    , 'aliases': [
      'dog'
    ]
    , 'tags': [
      'pet'
    ]
  }
  , {
    'emoji': '🐺'
    , 'description': 'wolf face'
    , 'aliases': [
      'wolf'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐱'
    , 'description': 'cat face'
    , 'aliases': [
      'cat'
    ]
    , 'tags': [
      'pet'
    ]
  }
  , {
    'emoji': '🐭'
    , 'description': 'mouse face'
    , 'aliases': [
      'mouse'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐹'
    , 'description': 'hamster face'
    , 'aliases': [
      'hamster'
    ]
    , 'tags': [
      'pet'
    ]
  }
  , {
    'emoji': '🐰'
    , 'description': 'rabbit face'
    , 'aliases': [
      'rabbit'
    ]
    , 'tags': [
      'bunny'
    ]
  }
  , {
    'emoji': '🐸'
    , 'description': 'frog face'
    , 'aliases': [
      'frog'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐯'
    , 'description': 'tiger face'
    , 'aliases': [
      'tiger'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐨'
    , 'description': 'koala'
    , 'aliases': [
      'koala'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐻'
    , 'description': 'bear face'
    , 'aliases': [
      'bear'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐷'
    , 'description': 'pig face'
    , 'aliases': [
      'pig'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐽'
    , 'description': 'pig nose'
    , 'aliases': [
      'pig_nose'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐮'
    , 'description': 'cow face'
    , 'aliases': [
      'cow'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐗'
    , 'description': 'boar'
    , 'aliases': [
      'boar'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐵'
    , 'description': 'monkey face'
    , 'aliases': [
      'monkey_face'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐒'
    , 'description': 'monkey'
    , 'aliases': [
      'monkey'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐴'
    , 'description': 'horse face'
    , 'aliases': [
      'horse'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐑'
    , 'description': 'sheep'
    , 'aliases': [
      'sheep'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐘'
    , 'description': 'elephant'
    , 'aliases': [
      'elephant'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐼'
    , 'description': 'panda face'
    , 'aliases': [
      'panda_face'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐧'
    , 'description': 'penguin'
    , 'aliases': [
      'penguin'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐦'
    , 'description': 'bird'
    , 'aliases': [
      'bird'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐤'
    , 'description': 'baby chick'
    , 'aliases': [
      'baby_chick'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐥'
    , 'description': 'front-facing baby chick'
    , 'aliases': [
      'hatched_chick'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐣'
    , 'description': 'hatching chick'
    , 'aliases': [
      'hatching_chick'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐔'
    , 'description': 'chicken'
    , 'aliases': [
      'chicken'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐍'
    , 'description': 'snake'
    , 'aliases': [
      'snake'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐢'
    , 'description': 'turtle'
    , 'aliases': [
      'turtle'
    ]
    , 'tags': [
      'slow'
    ]
  }
  , {
    'emoji': '🐛'
    , 'description': 'bug'
    , 'aliases': [
      'bug'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐝'
    , 'description': 'honeybee'
    , 'aliases': [
      'bee'
      , 'honeybee'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐜'
    , 'description': 'ant'
    , 'aliases': [
      'ant'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐞'
    , 'description': 'lady beetle'
    , 'aliases': [
      'beetle'
    ]
    , 'tags': [
      'bug'
    ]
  }
  , {
    'emoji': '🐌'
    , 'description': 'snail'
    , 'aliases': [
      'snail'
    ]
    , 'tags': [
      'slow'
    ]
  }
  , {
    'emoji': '🐙'
    , 'description': 'octopus'
    , 'aliases': [
      'octopus'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐚'
    , 'description': 'spiral shell'
    , 'aliases': [
      'shell'
    ]
    , 'tags': [
      'sea'
      , 'beach'
    ]
  }
  , {
    'emoji': '🐠'
    , 'description': 'tropical fish'
    , 'aliases': [
      'tropical_fish'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐟'
    , 'description': 'fish'
    , 'aliases': [
      'fish'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐬'
    , 'description': 'dolphin'
    , 'aliases': [
      'dolphin'
      , 'flipper'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐳'
    , 'description': 'spouting whale'
    , 'aliases': [
      'whale'
    ]
    , 'tags': [
      'sea'
    ]
  }
  , {
    'emoji': '🐋'
    , 'description': 'whale'
    , 'aliases': [
      'whale2'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐄'
    , 'description': 'cow'
    , 'aliases': [
      'cow2'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐏'
    , 'description': 'ram'
    , 'aliases': [
      'ram'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐀'
    , 'description': 'rat'
    , 'aliases': [
      'rat'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐃'
    , 'description': 'water buffalo'
    , 'aliases': [
      'water_buffalo'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐅'
    , 'description': 'tiger'
    , 'aliases': [
      'tiger2'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐇'
    , 'description': 'rabbit'
    , 'aliases': [
      'rabbit2'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐉'
    , 'description': 'dragon'
    , 'aliases': [
      'dragon'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐎'
    , 'description': 'horse'
    , 'aliases': [
      'racehorse'
    ]
    , 'tags': [
      'speed'
    ]
  }
  , {
    'emoji': '🐐'
    , 'description': 'goat'
    , 'aliases': [
      'goat'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐓'
    , 'description': 'rooster'
    , 'aliases': [
      'rooster'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐕'
    , 'description': 'dog'
    , 'aliases': [
      'dog2'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐖'
    , 'description': 'pig'
    , 'aliases': [
      'pig2'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐁'
    , 'description': 'mouse'
    , 'aliases': [
      'mouse2'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐂'
    , 'description': 'ox'
    , 'aliases': [
      'ox'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐲'
    , 'description': 'dragon face'
    , 'aliases': [
      'dragon_face'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐡'
    , 'description': 'blowfish'
    , 'aliases': [
      'blowfish'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐊'
    , 'description': 'crocodile'
    , 'aliases': [
      'crocodile'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐫'
    , 'description': 'bactrian camel'
    , 'aliases': [
      'camel'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐪'
    , 'description': 'dromedary camel'
    , 'aliases': [
      'dromedary_camel'
    ]
    , 'tags': [
      'desert'
    ]
  }
  , {
    'emoji': '🐆'
    , 'description': 'leopard'
    , 'aliases': [
      'leopard'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐈'
    , 'description': 'cat'
    , 'aliases': [
      'cat2'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🐩'
    , 'description': 'poodle'
    , 'aliases': [
      'poodle'
    ]
    , 'tags': [
      'dog'
    ]
  }
  , {
    'emoji': '🐾'
    , 'description': 'paw prints'
    , 'aliases': [
      'feet'
      , 'paw_prints'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💐'
    , 'description': 'bouquet'
    , 'aliases': [
      'bouquet'
    ]
    , 'tags': [
      'flowers'
    ]
  }
  , {
    'emoji': '🌸'
    , 'description': 'cherry blossom'
    , 'aliases': [
      'cherry_blossom'
    ]
    , 'tags': [
      'flower'
      , 'spring'
    ]
  }
  , {
    'emoji': '🌷'
    , 'description': 'tulip'
    , 'aliases': [
      'tulip'
    ]
    , 'tags': [
      'flower'
    ]
  }
  , {
    'emoji': '🍀'
    , 'description': 'four leaf clover'
    , 'aliases': [
      'four_leaf_clover'
    ]
    , 'tags': [
      'luck'
    ]
  }
  , {
    'emoji': '🌹'
    , 'description': 'rose'
    , 'aliases': [
      'rose'
    ]
    , 'tags': [
      'flower'
    ]
  }
  , {
    'emoji': '🌻'
    , 'description': 'sunflower'
    , 'aliases': [
      'sunflower'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌺'
    , 'description': 'hibiscus'
    , 'aliases': [
      'hibiscus'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍁'
    , 'description': 'maple leaf'
    , 'aliases': [
      'maple_leaf'
    ]
    , 'tags': [
      'canada'
    ]
  }
  , {
    'emoji': '🍃'
    , 'description': 'leaf fluttering in wind'
    , 'aliases': [
      'leaves'
    ]
    , 'tags': [
      'leaf'
    ]
  }
  , {
    'emoji': '🍂'
    , 'description': 'fallen leaf'
    , 'aliases': [
      'fallen_leaf'
    ]
    , 'tags': [
      'autumn'
    ]
  }
  , {
    'emoji': '🌿'
    , 'description': 'herb'
    , 'aliases': [
      'herb'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌾'
    , 'description': 'ear of rice'
    , 'aliases': [
      'ear_of_rice'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍄'
    , 'description': 'mushroom'
    , 'aliases': [
      'mushroom'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌵'
    , 'description': 'cactus'
    , 'aliases': [
      'cactus'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌴'
    , 'description': 'palm tree'
    , 'aliases': [
      'palm_tree'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌲'
    , 'description': 'evergreen tree'
    , 'aliases': [
      'evergreen_tree'
    ]
    , 'tags': [
      'wood'
    ]
  }
  , {
    'emoji': '🌳'
    , 'description': 'deciduous tree'
    , 'aliases': [
      'deciduous_tree'
    ]
    , 'tags': [
      'wood'
    ]
  }
  , {
    'emoji': '🌰'
    , 'description': 'chestnut'
    , 'aliases': [
      'chestnut'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌱'
    , 'description': 'seedling'
    , 'aliases': [
      'seedling'
    ]
    , 'tags': [
      'plant'
    ]
  }
  , {
    'emoji': '🌼'
    , 'description': 'blossom'
    , 'aliases': [
      'blossom'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌐'
    , 'description': 'globe with meridians'
    , 'aliases': [
      'globe_with_meridians'
    ]
    , 'tags': [
      'world'
      , 'global'
      , 'international'
    ]
  }
  , {
    'emoji': '🌞'
    , 'description': 'sun with face'
    , 'aliases': [
      'sun_with_face'
    ]
    , 'tags': [
      'summer'
    ]
  }
  , {
    'emoji': '🌝'
    , 'description': 'full moon with face'
    , 'aliases': [
      'full_moon_with_face'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌚'
    , 'description': 'new moon with face'
    , 'aliases': [
      'new_moon_with_face'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌑'
    , 'description': 'new moon symbol'
    , 'aliases': [
      'new_moon'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌒'
    , 'description': 'waxing crescent moon symbol'
    , 'aliases': [
      'waxing_crescent_moon'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌓'
    , 'description': 'first quarter moon symbol'
    , 'aliases': [
      'first_quarter_moon'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌔'
    , 'description': 'waxing gibbous moon symbol'
    , 'aliases': [
      'moon'
      , 'waxing_gibbous_moon'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌕'
    , 'description': 'full moon symbol'
    , 'aliases': [
      'full_moon'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌖'
    , 'description': 'waning gibbous moon symbol'
    , 'aliases': [
      'waning_gibbous_moon'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌗'
    , 'description': 'last quarter moon symbol'
    , 'aliases': [
      'last_quarter_moon'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌘'
    , 'description': 'waning crescent moon symbol'
    , 'aliases': [
      'waning_crescent_moon'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌜'
    , 'description': 'last quarter moon with face'
    , 'aliases': [
      'last_quarter_moon_with_face'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌛'
    , 'description': 'first quarter moon with face'
    , 'aliases': [
      'first_quarter_moon_with_face'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌙'
    , 'description': 'crescent moon'
    , 'aliases': [
      'crescent_moon'
    ]
    , 'tags': [
      'night'
    ]
  }
  , {
    'emoji': '🌍'
    , 'description': 'earth globe europe-africa'
    , 'aliases': [
      'earth_africa'
    ]
    , 'tags': [
      'globe'
      , 'world'
      , 'international'
    ]
  }
  , {
    'emoji': '🌎'
    , 'description': 'earth globe americas'
    , 'aliases': [
      'earth_americas'
    ]
    , 'tags': [
      'globe'
      , 'world'
      , 'international'
    ]
  }
  , {
    'emoji': '🌏'
    , 'description': 'earth globe asia-australia'
    , 'aliases': [
      'earth_asia'
    ]
    , 'tags': [
      'globe'
      , 'world'
      , 'international'
    ]
  }
  , {
    'emoji': '🌋'
    , 'description': 'volcano'
    , 'aliases': [
      'volcano'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌌'
    , 'description': 'milky way'
    , 'aliases': [
      'milky_way'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌠'
    , 'description': 'shooting star'
    , 'aliases': [
      'stars'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⭐'
    , 'description': 'white medium star'
    , 'aliases': [
      'star'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '☀️'
    , 'description': 'black sun with rays'
    , 'aliases': [
      'sunny'
    ]
    , 'tags': [
      'weather'
    ]
  }
  , {
    'emoji': '⛅'
    , 'description': 'sun behind cloud'
    , 'aliases': [
      'partly_sunny'
    ]
    , 'tags': [
      'weather'
      , 'cloud'
    ]
  }
  , {
    'emoji': '☁️'
    , 'description': 'cloud'
    , 'aliases': [
      'cloud'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⚡'
    , 'description': 'high voltage sign'
    , 'aliases': [
      'zap'
    ]
    , 'tags': [
      'lightning'
      , 'thunder'
    ]
  }
  , {
    'emoji': '☔'
    , 'description': 'umbrella with rain drops'
    , 'aliases': [
      'umbrella'
    ]
    , 'tags': [
      'rain'
      , 'weather'
    ]
  }
  , {
    'emoji': '❄️'
    , 'description': 'snowflake'
    , 'aliases': [
      'snowflake'
    ]
    , 'tags': [
      'winter'
      , 'cold'
      , 'weather'
    ]
  }
  , {
    'emoji': '⛄'
    , 'description': 'snowman without snow'
    , 'aliases': [
      'snowman'
    ]
    , 'tags': [
      'winter'
      , 'christmas'
    ]
  }
  , {
    'emoji': '🌀'
    , 'description': 'cyclone'
    , 'aliases': [
      'cyclone'
    ]
    , 'tags': [
      'swirl'
    ]
  }
  , {
    'emoji': '🌁'
    , 'description': 'foggy'
    , 'aliases': [
      'foggy'
    ]
    , 'tags': [
      'karl'
    ]
  }
  , {
    'emoji': '🌈'
    , 'description': 'rainbow'
    , 'aliases': [
      'rainbow'
    ]
    , 'tags': [
      'pride'
    ]
  }
  , {
    'emoji': '🌊'
    , 'description': 'water wave'
    , 'aliases': [
      'ocean'
    ]
    , 'tags': [
      'sea'
    ]
  }
  , {
    'emoji': '🎍'
    , 'description': 'pine decoration'
    , 'aliases': [
      'bamboo'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💝'
    , 'description': 'heart with ribbon'
    , 'aliases': [
      'gift_heart'
    ]
    , 'tags': [
      'chocolates'
    ]
  }
  , {
    'emoji': '🎎'
    , 'description': 'japanese dolls'
    , 'aliases': [
      'dolls'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎒'
    , 'description': 'school satchel'
    , 'aliases': [
      'school_satchel'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎓'
    , 'description': 'graduation cap'
    , 'aliases': [
      'mortar_board'
    ]
    , 'tags': [
      'education'
      , 'college'
      , 'university'
      , 'graduation'
    ]
  }
  , {
    'emoji': '🎏'
    , 'description': 'carp streamer'
    , 'aliases': [
      'flags'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎆'
    , 'description': 'fireworks'
    , 'aliases': [
      'fireworks'
    ]
    , 'tags': [
      'festival'
      , 'celebration'
    ]
  }
  , {
    'emoji': '🎇'
    , 'description': 'firework sparkler'
    , 'aliases': [
      'sparkler'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎐'
    , 'description': 'wind chime'
    , 'aliases': [
      'wind_chime'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎑'
    , 'description': 'moon viewing ceremony'
    , 'aliases': [
      'rice_scene'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎃'
    , 'description': 'jack-o-lantern'
    , 'aliases': [
      'jack_o_lantern'
    ]
    , 'tags': [
      'halloween'
    ]
  }
  , {
    'emoji': '👻'
    , 'description': 'ghost'
    , 'aliases': [
      'ghost'
    ]
    , 'tags': [
      'halloween'
    ]
  }
  , {
    'emoji': '🎅'
    , 'description': 'father christmas'
    , 'aliases': [
      'santa'
    ]
    , 'tags': [
      'christmas'
    ]
  }
  , {
    'emoji': '🎄'
    , 'description': 'christmas tree'
    , 'aliases': [
      'christmas_tree'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎁'
    , 'description': 'wrapped present'
    , 'aliases': [
      'gift'
    ]
    , 'tags': [
      'present'
      , 'birthday'
      , 'christmas'
    ]
  }
  , {
    'emoji': '🎋'
    , 'description': 'tanabata tree'
    , 'aliases': [
      'tanabata_tree'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎉'
    , 'description': 'party popper'
    , 'aliases': [
      'tada'
    ]
    , 'tags': [
      'party'
    ]
  }
  , {
    'emoji': '🎊'
    , 'description': 'confetti ball'
    , 'aliases': [
      'confetti_ball'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎈'
    , 'description': 'balloon'
    , 'aliases': [
      'balloon'
    ]
    , 'tags': [
      'party'
      , 'birthday'
    ]
  }
  , {
    'emoji': '🎌'
    , 'description': 'crossed flags'
    , 'aliases': [
      'crossed_flags'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔮'
    , 'description': 'crystal ball'
    , 'aliases': [
      'crystal_ball'
    ]
    , 'tags': [
      'fortune'
    ]
  }
  , {
    'emoji': '🎥'
    , 'description': 'movie camera'
    , 'aliases': [
      'movie_camera'
    ]
    , 'tags': [
      'film'
      , 'video'
    ]
  }
  , {
    'emoji': '📷'
    , 'description': 'camera'
    , 'aliases': [
      'camera'
    ]
    , 'tags': [
      'photo'
    ]
  }
  , {
    'emoji': '📹'
    , 'description': 'video camera'
    , 'aliases': [
      'video_camera'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📼'
    , 'description': 'videocassette'
    , 'aliases': [
      'vhs'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💿'
    , 'description': 'optical disc'
    , 'aliases': [
      'cd'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📀'
    , 'description': 'dvd'
    , 'aliases': [
      'dvd'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💽'
    , 'description': 'minidisc'
    , 'aliases': [
      'minidisc'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💾'
    , 'description': 'floppy disk'
    , 'aliases': [
      'floppy_disk'
    ]
    , 'tags': [
      'save'
    ]
  }
  , {
    'emoji': '💻'
    , 'description': 'personal computer'
    , 'aliases': [
      'computer'
    ]
    , 'tags': [
      'desktop'
      , 'screen'
    ]
  }
  , {
    'emoji': '📱'
    , 'description': 'mobile phone'
    , 'aliases': [
      'iphone'
    ]
    , 'tags': [
      'smartphone'
      , 'mobile'
    ]
  }
  , {
    'emoji': '☎️'
    , 'description': 'black telephone'
    , 'aliases': [
      'phone'
      , 'telephone'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📞'
    , 'description': 'telephone receiver'
    , 'aliases': [
      'telephone_receiver'
    ]
    , 'tags': [
      'phone'
      , 'call'
    ]
  }
  , {
    'emoji': '📟'
    , 'description': 'pager'
    , 'aliases': [
      'pager'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📠'
    , 'description': 'fax machine'
    , 'aliases': [
      'fax'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📡'
    , 'description': 'satellite antenna'
    , 'aliases': [
      'satellite'
    ]
    , 'tags': [
      'signal'
    ]
  }
  , {
    'emoji': '📺'
    , 'description': 'television'
    , 'aliases': [
      'tv'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📻'
    , 'description': 'radio'
    , 'aliases': [
      'radio'
    ]
    , 'tags': [
      'podcast'
    ]
  }
  , {
    'emoji': '🔊'
    , 'description': 'speaker with three sound waves'
    , 'aliases': [
      'loud_sound'
    ]
    , 'tags': [
      'volume'
    ]
  }
  , {
    'emoji': '🔉'
    , 'description': 'speaker with one sound wave'
    , 'aliases': [
      'sound'
    ]
    , 'tags': [
      'volume'
    ]
  }
  , {
    'emoji': '🔈'
    , 'description': 'speaker'
    , 'aliases': [
      'speaker'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔇'
    , 'description': 'speaker with cancellation stroke'
    , 'aliases': [
      'mute'
    ]
    , 'tags': [
      'sound'
      , 'volume'
    ]
  }
  , {
    'emoji': '🔔'
    , 'description': 'bell'
    , 'aliases': [
      'bell'
    ]
    , 'tags': [
      'sound'
      , 'notification'
    ]
  }
  , {
    'emoji': '🔕'
    , 'description': 'bell with cancellation stroke'
    , 'aliases': [
      'no_bell'
    ]
    , 'tags': [
      'volume'
      , 'off'
    ]
  }
  , {
    'emoji': '📢'
    , 'description': 'public address loudspeaker'
    , 'aliases': [
      'loudspeaker'
    ]
    , 'tags': [
      'announcement'
    ]
  }
  , {
    'emoji': '📣'
    , 'description': 'cheering megaphone'
    , 'aliases': [
      'mega'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⏳'
    , 'description': 'hourglass with flowing sand'
    , 'aliases': [
      'hourglass_flowing_sand'
    ]
    , 'tags': [
      'time'
    ]
  }
  , {
    'emoji': '⌛'
    , 'description': 'hourglass'
    , 'aliases': [
      'hourglass'
    ]
    , 'tags': [
      'time'
    ]
  }
  , {
    'emoji': '⏰'
    , 'description': 'alarm clock'
    , 'aliases': [
      'alarm_clock'
    ]
    , 'tags': [
      'morning'
    ]
  }
  , {
    'emoji': '⌚'
    , 'description': 'watch'
    , 'aliases': [
      'watch'
    ]
    , 'tags': [
      'time'
    ]
  }
  , {
    'emoji': '🔓'
    , 'description': 'open lock'
    , 'aliases': [
      'unlock'
    ]
    , 'tags': [
      'security'
    ]
  }
  , {
    'emoji': '🔒'
    , 'description': 'lock'
    , 'aliases': [
      'lock'
    ]
    , 'tags': [
      'security'
      , 'private'
    ]
  }
  , {
    'emoji': '🔏'
    , 'description': 'lock with ink pen'
    , 'aliases': [
      'lock_with_ink_pen'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔐'
    , 'description': 'closed lock with key'
    , 'aliases': [
      'closed_lock_with_key'
    ]
    , 'tags': [
      'security'
    ]
  }
  , {
    'emoji': '🔑'
    , 'description': 'key'
    , 'aliases': [
      'key'
    ]
    , 'tags': [
      'lock'
      , 'password'
    ]
  }
  , {
    'emoji': '🔎'
    , 'description': 'right-pointing magnifying glass'
    , 'aliases': [
      'mag_right'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💡'
    , 'description': 'electric light bulb'
    , 'aliases': [
      'bulb'
    ]
    , 'tags': [
      'idea'
      , 'light'
    ]
  }
  , {
    'emoji': '🔦'
    , 'description': 'electric torch'
    , 'aliases': [
      'flashlight'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔆'
    , 'description': 'high brightness symbol'
    , 'aliases': [
      'high_brightness'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔅'
    , 'description': 'low brightness symbol'
    , 'aliases': [
      'low_brightness'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔌'
    , 'description': 'electric plug'
    , 'aliases': [
      'electric_plug'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔋'
    , 'description': 'battery'
    , 'aliases': [
      'battery'
    ]
    , 'tags': [
      'power'
    ]
  }
  , {
    'emoji': '🔍'
    , 'description': 'left-pointing magnifying glass'
    , 'aliases': [
      'mag'
    ]
    , 'tags': [
      'search'
      , 'zoom'
    ]
  }
  , {
    'emoji': '🛁'
    , 'description': 'bathtub'
    , 'aliases': [
      'bathtub'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🛀'
    , 'description': 'bath'
    , 'aliases': [
      'bath'
    ]
    , 'tags': [
      'shower'
    ]
  }
  , {
    'emoji': '🚿'
    , 'description': 'shower'
    , 'aliases': [
      'shower'
    ]
    , 'tags': [
      'bath'
    ]
  }
  , {
    'emoji': '🚽'
    , 'description': 'toilet'
    , 'aliases': [
      'toilet'
    ]
    , 'tags': [
      'wc'
    ]
  }
  , {
    'emoji': '🔧'
    , 'description': 'wrench'
    , 'aliases': [
      'wrench'
    ]
    , 'tags': [
      'tool'
    ]
  }
  , {
    'emoji': '🔩'
    , 'description': 'nut and bolt'
    , 'aliases': [
      'nut_and_bolt'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔨'
    , 'description': 'hammer'
    , 'aliases': [
      'hammer'
    ]
    , 'tags': [
      'tool'
    ]
  }
  , {
    'emoji': '🚪'
    , 'description': 'door'
    , 'aliases': [
      'door'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚬'
    , 'description': 'smoking symbol'
    , 'aliases': [
      'smoking'
    ]
    , 'tags': [
      'cigarette'
    ]
  }
  , {
    'emoji': '💣'
    , 'description': 'bomb'
    , 'aliases': [
      'bomb'
    ]
    , 'tags': [
      'boom'
    ]
  }
  , {
    'emoji': '🔫'
    , 'description': 'pistol'
    , 'aliases': [
      'gun'
    ]
    , 'tags': [
      'shoot'
      , 'weapon'
    ]
  }
  , {
    'emoji': '🔪'
    , 'description': 'hocho'
    , 'aliases': [
      'hocho'
      , 'knife'
    ]
    , 'tags': [
      'cut'
      , 'chop'
    ]
  }
  , {
    'emoji': '💊'
    , 'description': 'pill'
    , 'aliases': [
      'pill'
    ]
    , 'tags': [
      'health'
      , 'medicine'
    ]
  }
  , {
    'emoji': '💉'
    , 'description': 'syringe'
    , 'aliases': [
      'syringe'
    ]
    , 'tags': [
      'health'
      , 'hospital'
      , 'needle'
    ]
  }
  , {
    'emoji': '💰'
    , 'description': 'money bag'
    , 'aliases': [
      'moneybag'
    ]
    , 'tags': [
      'dollar'
      , 'cream'
    ]
  }
  , {
    'emoji': '💴'
    , 'description': 'banknote with yen sign'
    , 'aliases': [
      'yen'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💵'
    , 'description': 'banknote with dollar sign'
    , 'aliases': [
      'dollar'
    ]
    , 'tags': [
      'money'
    ]
  }
  , {
    'emoji': '💷'
    , 'description': 'banknote with pound sign'
    , 'aliases': [
      'pound'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💶'
    , 'description': 'banknote with euro sign'
    , 'aliases': [
      'euro'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💳'
    , 'description': 'credit card'
    , 'aliases': [
      'credit_card'
    ]
    , 'tags': [
      'subscription'
    ]
  }
  , {
    'emoji': '💸'
    , 'description': 'money with wings'
    , 'aliases': [
      'money_with_wings'
    ]
    , 'tags': [
      'dollar'
    ]
  }
  , {
    'emoji': '📲'
    , 'description': 'mobile phone with rightwards arrow at left'
    , 'aliases': [
      'calling'
    ]
    , 'tags': [
      'call'
      , 'incoming'
    ]
  }
  , {
    'emoji': '📧'
    , 'description': 'e-mail symbol'
    , 'aliases': [
      'e-mail'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📥'
    , 'description': 'inbox tray'
    , 'aliases': [
      'inbox_tray'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📤'
    , 'description': 'outbox tray'
    , 'aliases': [
      'outbox_tray'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '✉️'
    , 'description': 'envelope'
    , 'aliases': [
      'email'
      , 'envelope'
    ]
    , 'tags': [
      'letter'
    ]
  }
  , {
    'emoji': '📩'
    , 'description': 'envelope with downwards arrow above'
    , 'aliases': [
      'envelope_with_arrow'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📨'
    , 'description': 'incoming envelope'
    , 'aliases': [
      'incoming_envelope'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📯'
    , 'description': 'postal horn'
    , 'aliases': [
      'postal_horn'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📫'
    , 'description': 'closed mailbox with raised flag'
    , 'aliases': [
      'mailbox'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📪'
    , 'description': 'closed mailbox with lowered flag'
    , 'aliases': [
      'mailbox_closed'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📬'
    , 'description': 'open mailbox with raised flag'
    , 'aliases': [
      'mailbox_with_mail'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📭'
    , 'description': 'open mailbox with lowered flag'
    , 'aliases': [
      'mailbox_with_no_mail'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📮'
    , 'description': 'postbox'
    , 'aliases': [
      'postbox'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📦'
    , 'description': 'package'
    , 'aliases': [
      'package'
    ]
    , 'tags': [
      'shipping'
    ]
  }
  , {
    'emoji': '📝'
    , 'description': 'memo'
    , 'aliases': [
      'memo'
      , 'pencil'
    ]
    , 'tags': [
      'document'
      , 'note'
    ]
  }
  , {
    'emoji': '📄'
    , 'description': 'page facing up'
    , 'aliases': [
      'page_facing_up'
    ]
    , 'tags': [
      'document'
    ]
  }
  , {
    'emoji': '📃'
    , 'description': 'page with curl'
    , 'aliases': [
      'page_with_curl'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📑'
    , 'description': 'bookmark tabs'
    , 'aliases': [
      'bookmark_tabs'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📊'
    , 'description': 'bar chart'
    , 'aliases': [
      'bar_chart'
    ]
    , 'tags': [
      'stats'
      , 'metrics'
    ]
  }
  , {
    'emoji': '📈'
    , 'description': 'chart with upwards trend'
    , 'aliases': [
      'chart_with_upwards_trend'
    ]
    , 'tags': [
      'graph'
      , 'metrics'
    ]
  }
  , {
    'emoji': '📉'
    , 'description': 'chart with downwards trend'
    , 'aliases': [
      'chart_with_downwards_trend'
    ]
    , 'tags': [
      'graph'
      , 'metrics'
    ]
  }
  , {
    'emoji': '📜'
    , 'description': 'scroll'
    , 'aliases': [
      'scroll'
    ]
    , 'tags': [
      'document'
    ]
  }
  , {
    'emoji': '📋'
    , 'description': 'clipboard'
    , 'aliases': [
      'clipboard'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📅'
    , 'description': 'calendar'
    , 'aliases': [
      'date'
    ]
    , 'tags': [
      'calendar'
      , 'schedule'
    ]
  }
  , {
    'emoji': '📆'
    , 'description': 'tear-off calendar'
    , 'aliases': [
      'calendar'
    ]
    , 'tags': [
      'schedule'
    ]
  }
  , {
    'emoji': '📇'
    , 'description': 'card index'
    , 'aliases': [
      'card_index'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📁'
    , 'description': 'file folder'
    , 'aliases': [
      'file_folder'
    ]
    , 'tags': [
      'directory'
    ]
  }
  , {
    'emoji': '📂'
    , 'description': 'open file folder'
    , 'aliases': [
      'open_file_folder'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '✂️'
    , 'description': 'black scissors'
    , 'aliases': [
      'scissors'
    ]
    , 'tags': [
      'cut'
    ]
  }
  , {
    'emoji': '📌'
    , 'description': 'pushpin'
    , 'aliases': [
      'pushpin'
    ]
    , 'tags': [
      'location'
    ]
  }
  , {
    'emoji': '📎'
    , 'description': 'paperclip'
    , 'aliases': [
      'paperclip'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '✒️'
    , 'description': 'black nib'
    , 'aliases': [
      'black_nib'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '✏️'
    , 'description': 'pencil'
    , 'aliases': [
      'pencil2'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📏'
    , 'description': 'straight ruler'
    , 'aliases': [
      'straight_ruler'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📐'
    , 'description': 'triangular ruler'
    , 'aliases': [
      'triangular_ruler'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📕'
    , 'description': 'closed book'
    , 'aliases': [
      'closed_book'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📗'
    , 'description': 'green book'
    , 'aliases': [
      'green_book'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📘'
    , 'description': 'blue book'
    , 'aliases': [
      'blue_book'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📙'
    , 'description': 'orange book'
    , 'aliases': [
      'orange_book'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📓'
    , 'description': 'notebook'
    , 'aliases': [
      'notebook'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📔'
    , 'description': 'notebook with decorative cover'
    , 'aliases': [
      'notebook_with_decorative_cover'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📒'
    , 'description': 'ledger'
    , 'aliases': [
      'ledger'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📚'
    , 'description': 'books'
    , 'aliases': [
      'books'
    ]
    , 'tags': [
      'library'
    ]
  }
  , {
    'emoji': '📖'
    , 'description': 'open book'
    , 'aliases': [
      'book'
      , 'open_book'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔖'
    , 'description': 'bookmark'
    , 'aliases': [
      'bookmark'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📛'
    , 'description': 'name badge'
    , 'aliases': [
      'name_badge'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔬'
    , 'description': 'microscope'
    , 'aliases': [
      'microscope'
    ]
    , 'tags': [
      'science'
      , 'laboratory'
      , 'investigate'
    ]
  }
  , {
    'emoji': '🔭'
    , 'description': 'telescope'
    , 'aliases': [
      'telescope'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📰'
    , 'description': 'newspaper'
    , 'aliases': [
      'newspaper'
    ]
    , 'tags': [
      'press'
    ]
  }
  , {
    'emoji': '🎨'
    , 'description': 'artist palette'
    , 'aliases': [
      'art'
    ]
    , 'tags': [
      'design'
      , 'paint'
    ]
  }
  , {
    'emoji': '🎬'
    , 'description': 'clapper board'
    , 'aliases': [
      'clapper'
    ]
    , 'tags': [
      'film'
    ]
  }
  , {
    'emoji': '🎤'
    , 'description': 'microphone'
    , 'aliases': [
      'microphone'
    ]
    , 'tags': [
      'sing'
    ]
  }
  , {
    'emoji': '🎧'
    , 'description': 'headphone'
    , 'aliases': [
      'headphones'
    ]
    , 'tags': [
      'music'
      , 'earphones'
    ]
  }
  , {
    'emoji': '🎼'
    , 'description': 'musical score'
    , 'aliases': [
      'musical_score'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎵'
    , 'description': 'musical note'
    , 'aliases': [
      'musical_note'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎶'
    , 'description': 'multiple musical notes'
    , 'aliases': [
      'notes'
    ]
    , 'tags': [
      'music'
    ]
  }
  , {
    'emoji': '🎹'
    , 'description': 'musical keyboard'
    , 'aliases': [
      'musical_keyboard'
    ]
    , 'tags': [
      'piano'
    ]
  }
  , {
    'emoji': '🎻'
    , 'description': 'violin'
    , 'aliases': [
      'violin'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎺'
    , 'description': 'trumpet'
    , 'aliases': [
      'trumpet'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎷'
    , 'description': 'saxophone'
    , 'aliases': [
      'saxophone'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎸'
    , 'description': 'guitar'
    , 'aliases': [
      'guitar'
    ]
    , 'tags': [
      'rock'
    ]
  }
  , {
    'emoji': '👾'
    , 'description': 'alien monster'
    , 'aliases': [
      'space_invader'
    ]
    , 'tags': [
      'game'
      , 'retro'
    ]
  }
  , {
    'emoji': '🎮'
    , 'description': 'video game'
    , 'aliases': [
      'video_game'
    ]
    , 'tags': [
      'play'
      , 'controller'
      , 'console'
    ]
  }
  , {
    'emoji': '🃏'
    , 'description': 'playing card black joker'
    , 'aliases': [
      'black_joker'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎴'
    , 'description': 'flower playing cards'
    , 'aliases': [
      'flower_playing_cards'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🀄'
    , 'description': 'mahjong tile red dragon'
    , 'aliases': [
      'mahjong'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎲'
    , 'description': 'game die'
    , 'aliases': [
      'game_die'
    ]
    , 'tags': [
      'dice'
      , 'gambling'
    ]
  }
  , {
    'emoji': '🎯'
    , 'description': 'direct hit'
    , 'aliases': [
      'dart'
    ]
    , 'tags': [
      'target'
    ]
  }
  , {
    'emoji': '🏈'
    , 'description': 'american football'
    , 'aliases': [
      'football'
    ]
    , 'tags': [
      'sports'
    ]
  }
  , {
    'emoji': '🏀'
    , 'description': 'basketball and hoop'
    , 'aliases': [
      'basketball'
    ]
    , 'tags': [
      'sports'
    ]
  }
  , {
    'emoji': '⚽'
    , 'description': 'soccer ball'
    , 'aliases': [
      'soccer'
    ]
    , 'tags': [
      'sports'
    ]
  }
  , {
    'emoji': '⚾️'
    , 'description': 'baseball'
    , 'aliases': [
      'baseball'
    ]
    , 'tags': [
      'sports'
    ]
  }
  , {
    'emoji': '🎾'
    , 'description': 'tennis racquet and ball'
    , 'aliases': [
      'tennis'
    ]
    , 'tags': [
      'sports'
    ]
  }
  , {
    'emoji': '🎱'
    , 'description': 'billiards'
    , 'aliases': [
      '8ball'
    ]
    , 'tags': [
      'pool'
      , 'billiards'
    ]
  }
  , {
    'emoji': '🏉'
    , 'description': 'rugby football'
    , 'aliases': [
      'rugby_football'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎳'
    , 'description': 'bowling'
    , 'aliases': [
      'bowling'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⛳'
    , 'description': 'flag in hole'
    , 'aliases': [
      'golf'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚵'
    , 'description': 'mountain bicyclist'
    , 'aliases': [
      'mountain_bicyclist'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚴'
    , 'description': 'bicyclist'
    , 'aliases': [
      'bicyclist'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🏁'
    , 'description': 'chequered flag'
    , 'aliases': [
      'checkered_flag'
    ]
    , 'tags': [
      'milestone'
      , 'finish'
    ]
  }
  , {
    'emoji': '🏇'
    , 'description': 'horse racing'
    , 'aliases': [
      'horse_racing'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🏆'
    , 'description': 'trophy'
    , 'aliases': [
      'trophy'
    ]
    , 'tags': [
      'award'
      , 'contest'
      , 'winner'
    ]
  }
  , {
    'emoji': '🎿'
    , 'description': 'ski and ski boot'
    , 'aliases': [
      'ski'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🏂'
    , 'description': 'snowboarder'
    , 'aliases': [
      'snowboarder'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🏊'
    , 'description': 'swimmer'
    , 'aliases': [
      'swimmer'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🏄'
    , 'description': 'surfer'
    , 'aliases': [
      'surfer'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎣'
    , 'description': 'fishing pole and fish'
    , 'aliases': [
      'fishing_pole_and_fish'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '☕'
    , 'description': 'hot beverage'
    , 'aliases': [
      'coffee'
    ]
    , 'tags': [
      'cafe'
      , 'espresso'
    ]
  }
  , {
    'emoji': '🍵'
    , 'description': 'teacup without handle'
    , 'aliases': [
      'tea'
    ]
    , 'tags': [
      'green'
      , 'breakfast'
    ]
  }
  , {
    'emoji': '🍶'
    , 'description': 'sake bottle and cup'
    , 'aliases': [
      'sake'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍼'
    , 'description': 'baby bottle'
    , 'aliases': [
      'baby_bottle'
    ]
    , 'tags': [
      'milk'
    ]
  }
  , {
    'emoji': '🍺'
    , 'description': 'beer mug'
    , 'aliases': [
      'beer'
    ]
    , 'tags': [
      'drink'
    ]
  }
  , {
    'emoji': '🍻'
    , 'description': 'clinking beer mugs'
    , 'aliases': [
      'beers'
    ]
    , 'tags': [
      'drinks'
    ]
  }
  , {
    'emoji': '🍸'
    , 'description': 'cocktail glass'
    , 'aliases': [
      'cocktail'
    ]
    , 'tags': [
      'drink'
    ]
  }
  , {
    'emoji': '🍹'
    , 'description': 'tropical drink'
    , 'aliases': [
      'tropical_drink'
    ]
    , 'tags': [
      'summer'
      , 'vacation'
    ]
  }
  , {
    'emoji': '🍷'
    , 'description': 'wine glass'
    , 'aliases': [
      'wine_glass'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍴'
    , 'description': 'fork and knife'
    , 'aliases': [
      'fork_and_knife'
    ]
    , 'tags': [
      'cutlery'
    ]
  }
  , {
    'emoji': '🍕'
    , 'description': 'slice of pizza'
    , 'aliases': [
      'pizza'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍔'
    , 'description': 'hamburger'
    , 'aliases': [
      'hamburger'
    ]
    , 'tags': [
      'burger'
    ]
  }
  , {
    'emoji': '🍟'
    , 'description': 'french fries'
    , 'aliases': [
      'fries'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍗'
    , 'description': 'poultry leg'
    , 'aliases': [
      'poultry_leg'
    ]
    , 'tags': [
      'meat'
      , 'chicken'
    ]
  }
  , {
    'emoji': '🍖'
    , 'description': 'meat on bone'
    , 'aliases': [
      'meat_on_bone'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍝'
    , 'description': 'spaghetti'
    , 'aliases': [
      'spaghetti'
    ]
    , 'tags': [
      'pasta'
    ]
  }
  , {
    'emoji': '🍛'
    , 'description': 'curry and rice'
    , 'aliases': [
      'curry'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍤'
    , 'description': 'fried shrimp'
    , 'aliases': [
      'fried_shrimp'
    ]
    , 'tags': [
      'tempura'
    ]
  }
  , {
    'emoji': '🍱'
    , 'description': 'bento box'
    , 'aliases': [
      'bento'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍣'
    , 'description': 'sushi'
    , 'aliases': [
      'sushi'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍥'
    , 'description': 'fish cake with swirl design'
    , 'aliases': [
      'fish_cake'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍙'
    , 'description': 'rice ball'
    , 'aliases': [
      'rice_ball'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍘'
    , 'description': 'rice cracker'
    , 'aliases': [
      'rice_cracker'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍚'
    , 'description': 'cooked rice'
    , 'aliases': [
      'rice'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍜'
    , 'description': 'steaming bowl'
    , 'aliases': [
      'ramen'
    ]
    , 'tags': [
      'noodle'
    ]
  }
  , {
    'emoji': '🍲'
    , 'description': 'pot of food'
    , 'aliases': [
      'stew'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍢'
    , 'description': 'oden'
    , 'aliases': [
      'oden'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍡'
    , 'description': 'dango'
    , 'aliases': [
      'dango'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍳'
    , 'description': 'cooking'
    , 'aliases': [
      'egg'
    ]
    , 'tags': [
      'breakfast'
    ]
  }
  , {
    'emoji': '🍞'
    , 'description': 'bread'
    , 'aliases': [
      'bread'
    ]
    , 'tags': [
      'toast'
    ]
  }
  , {
    'emoji': '🍩'
    , 'description': 'doughnut'
    , 'aliases': [
      'doughnut'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍮'
    , 'description': 'custard'
    , 'aliases': [
      'custard'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍦'
    , 'description': 'soft ice cream'
    , 'aliases': [
      'icecream'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍨'
    , 'description': 'ice cream'
    , 'aliases': [
      'ice_cream'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍧'
    , 'description': 'shaved ice'
    , 'aliases': [
      'shaved_ice'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎂'
    , 'description': 'birthday cake'
    , 'aliases': [
      'birthday'
    ]
    , 'tags': [
      'party'
    ]
  }
  , {
    'emoji': '🍰'
    , 'description': 'shortcake'
    , 'aliases': [
      'cake'
    ]
    , 'tags': [
      'dessert'
    ]
  }
  , {
    'emoji': '🍪'
    , 'description': 'cookie'
    , 'aliases': [
      'cookie'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍫'
    , 'description': 'chocolate bar'
    , 'aliases': [
      'chocolate_bar'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍬'
    , 'description': 'candy'
    , 'aliases': [
      'candy'
    ]
    , 'tags': [
      'sweet'
    ]
  }
  , {
    'emoji': '🍭'
    , 'description': 'lollipop'
    , 'aliases': [
      'lollipop'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍯'
    , 'description': 'honey pot'
    , 'aliases': [
      'honey_pot'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍎'
    , 'description': 'red apple'
    , 'aliases': [
      'apple'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍏'
    , 'description': 'green apple'
    , 'aliases': [
      'green_apple'
    ]
    , 'tags': [
      'fruit'
    ]
  }
  , {
    'emoji': '🍊'
    , 'description': 'tangerine'
    , 'aliases': [
      'tangerine'
      , 'orange'
      , 'mandarin'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍋'
    , 'description': 'lemon'
    , 'aliases': [
      'lemon'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍒'
    , 'description': 'cherries'
    , 'aliases': [
      'cherries'
    ]
    , 'tags': [
      'fruit'
    ]
  }
  , {
    'emoji': '🍇'
    , 'description': 'grapes'
    , 'aliases': [
      'grapes'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍉'
    , 'description': 'watermelon'
    , 'aliases': [
      'watermelon'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍓'
    , 'description': 'strawberry'
    , 'aliases': [
      'strawberry'
    ]
    , 'tags': [
      'fruit'
    ]
  }
  , {
    'emoji': '🍑'
    , 'description': 'peach'
    , 'aliases': [
      'peach'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍈'
    , 'description': 'melon'
    , 'aliases': [
      'melon'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍌'
    , 'description': 'banana'
    , 'aliases': [
      'banana'
    ]
    , 'tags': [
      'fruit'
    ]
  }
  , {
    'emoji': '🍐'
    , 'description': 'pear'
    , 'aliases': [
      'pear'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍍'
    , 'description': 'pineapple'
    , 'aliases': [
      'pineapple'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍠'
    , 'description': 'roasted sweet potato'
    , 'aliases': [
      'sweet_potato'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🍆'
    , 'description': 'aubergine'
    , 'aliases': [
      'eggplant'
    ]
    , 'tags': [
      'aubergine'
    ]
  }
  , {
    'emoji': '🍅'
    , 'description': 'tomato'
    , 'aliases': [
      'tomato'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌽'
    , 'description': 'ear of maize'
    , 'aliases': [
      'corn'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🏠'
    , 'description': 'house building'
    , 'aliases': [
      'house'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🏡'
    , 'description': 'house with garden'
    , 'aliases': [
      'house_with_garden'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🏫'
    , 'description': 'school'
    , 'aliases': [
      'school'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🏢'
    , 'description': 'office building'
    , 'aliases': [
      'office'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🏣'
    , 'description': 'japanese post office'
    , 'aliases': [
      'post_office'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🏥'
    , 'description': 'hospital'
    , 'aliases': [
      'hospital'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🏦'
    , 'description': 'bank'
    , 'aliases': [
      'bank'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🏪'
    , 'description': 'convenience store'
    , 'aliases': [
      'convenience_store'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🏩'
    , 'description': 'love hotel'
    , 'aliases': [
      'love_hotel'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🏨'
    , 'description': 'hotel'
    , 'aliases': [
      'hotel'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💒'
    , 'description': 'wedding'
    , 'aliases': [
      'wedding'
    ]
    , 'tags': [
      'marriage'
    ]
  }
  , {
    'emoji': '⛪'
    , 'description': 'church'
    , 'aliases': [
      'church'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🏬'
    , 'description': 'department store'
    , 'aliases': [
      'department_store'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🏤'
    , 'description': 'european post office'
    , 'aliases': [
      'european_post_office'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌇'
    , 'description': 'sunset over buildings'
    , 'aliases': [
      'city_sunrise'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌆'
    , 'description': 'cityscape at dusk'
    , 'aliases': [
      'city_sunset'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🏯'
    , 'description': 'japanese castle'
    , 'aliases': [
      'japanese_castle'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🏰'
    , 'description': 'european castle'
    , 'aliases': [
      'european_castle'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⛺'
    , 'description': 'tent'
    , 'aliases': [
      'tent'
    ]
    , 'tags': [
      'camping'
    ]
  }
  , {
    'emoji': '🏭'
    , 'description': 'factory'
    , 'aliases': [
      'factory'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🗼'
    , 'description': 'tokyo tower'
    , 'aliases': [
      'tokyo_tower'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🗾'
    , 'description': 'silhouette of japan'
    , 'aliases': [
      'japan'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🗻'
    , 'description': 'mount fuji'
    , 'aliases': [
      'mount_fuji'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌄'
    , 'description': 'sunrise over mountains'
    , 'aliases': [
      'sunrise_over_mountains'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌅'
    , 'description': 'sunrise'
    , 'aliases': [
      'sunrise'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌃'
    , 'description': 'night with stars'
    , 'aliases': [
      'night_with_stars'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🗽'
    , 'description': 'statue of liberty'
    , 'aliases': [
      'statue_of_liberty'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🌉'
    , 'description': 'bridge at night'
    , 'aliases': [
      'bridge_at_night'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎠'
    , 'description': 'carousel horse'
    , 'aliases': [
      'carousel_horse'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎡'
    , 'description': 'ferris wheel'
    , 'aliases': [
      'ferris_wheel'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⛲'
    , 'description': 'fountain'
    , 'aliases': [
      'fountain'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎢'
    , 'description': 'roller coaster'
    , 'aliases': [
      'roller_coaster'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚢'
    , 'description': 'ship'
    , 'aliases': [
      'ship'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⛵'
    , 'description': 'sailboat'
    , 'aliases': [
      'boat'
      , 'sailboat'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚤'
    , 'description': 'speedboat'
    , 'aliases': [
      'speedboat'
    ]
    , 'tags': [
      'ship'
    ]
  }
  , {
    'emoji': '🚣'
    , 'description': 'rowboat'
    , 'aliases': [
      'rowboat'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⚓'
    , 'description': 'anchor'
    , 'aliases': [
      'anchor'
    ]
    , 'tags': [
      'ship'
    ]
  }
  , {
    'emoji': '🚀'
    , 'description': 'rocket'
    , 'aliases': [
      'rocket'
    ]
    , 'tags': [
      'ship'
      , 'launch'
    ]
  }
  , {
    'emoji': '✈️'
    , 'description': 'airplane'
    , 'aliases': [
      'airplane'
    ]
    , 'tags': [
      'flight'
    ]
  }
  , {
    'emoji': '💺'
    , 'description': 'seat'
    , 'aliases': [
      'seat'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚁'
    , 'description': 'helicopter'
    , 'aliases': [
      'helicopter'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚂'
    , 'description': 'steam locomotive'
    , 'aliases': [
      'steam_locomotive'
    ]
    , 'tags': [
      'train'
    ]
  }
  , {
    'emoji': '🚊'
    , 'description': 'tram'
    , 'aliases': [
      'tram'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚉'
    , 'description': 'station'
    , 'aliases': [
      'station'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚞'
    , 'description': 'mountain railway'
    , 'aliases': [
      'mountain_railway'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚆'
    , 'description': 'train'
    , 'aliases': [
      'train2'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚄'
    , 'description': 'high-speed train'
    , 'aliases': [
      'bullettrain_side'
    ]
    , 'tags': [
      'train'
    ]
  }
  , {
    'emoji': '🚅'
    , 'description': 'high-speed train with bullet nose'
    , 'aliases': [
      'bullettrain_front'
    ]
    , 'tags': [
      'train'
    ]
  }
  , {
    'emoji': '🚈'
    , 'description': 'light rail'
    , 'aliases': [
      'light_rail'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚇'
    , 'description': 'metro'
    , 'aliases': [
      'metro'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚝'
    , 'description': 'monorail'
    , 'aliases': [
      'monorail'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚋'
    , 'description': 'tram car'
    , 'aliases': [
      'train'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚃'
    , 'description': 'railway car'
    , 'aliases': [
      'railway_car'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚎'
    , 'description': 'trolleybus'
    , 'aliases': [
      'trolleybus'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚌'
    , 'description': 'bus'
    , 'aliases': [
      'bus'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚍'
    , 'description': 'oncoming bus'
    , 'aliases': [
      'oncoming_bus'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚙'
    , 'description': 'recreational vehicle'
    , 'aliases': [
      'blue_car'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚘'
    , 'description': 'oncoming automobile'
    , 'aliases': [
      'oncoming_automobile'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚗'
    , 'description': 'automobile'
    , 'aliases': [
      'car'
      , 'red_car'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚕'
    , 'description': 'taxi'
    , 'aliases': [
      'taxi'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚖'
    , 'description': 'oncoming taxi'
    , 'aliases': [
      'oncoming_taxi'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚛'
    , 'description': 'articulated lorry'
    , 'aliases': [
      'articulated_lorry'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚚'
    , 'description': 'delivery truck'
    , 'aliases': [
      'truck'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚨'
    , 'description': 'police cars revolving light'
    , 'aliases': [
      'rotating_light'
    ]
    , 'tags': [
      '911'
      , 'emergency'
    ]
  }
  , {
    'emoji': '🚓'
    , 'description': 'police car'
    , 'aliases': [
      'police_car'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚔'
    , 'description': 'oncoming police car'
    , 'aliases': [
      'oncoming_police_car'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚒'
    , 'description': 'fire engine'
    , 'aliases': [
      'fire_engine'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚑'
    , 'description': 'ambulance'
    , 'aliases': [
      'ambulance'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚐'
    , 'description': 'minibus'
    , 'aliases': [
      'minibus'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚲'
    , 'description': 'bicycle'
    , 'aliases': [
      'bike'
    ]
    , 'tags': [
      'bicycle'
    ]
  }
  , {
    'emoji': '🚡'
    , 'description': 'aerial tramway'
    , 'aliases': [
      'aerial_tramway'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚟'
    , 'description': 'suspension railway'
    , 'aliases': [
      'suspension_railway'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚠'
    , 'description': 'mountain cableway'
    , 'aliases': [
      'mountain_cableway'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚜'
    , 'description': 'tractor'
    , 'aliases': [
      'tractor'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💈'
    , 'description': 'barber pole'
    , 'aliases': [
      'barber'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚏'
    , 'description': 'bus stop'
    , 'aliases': [
      'busstop'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎫'
    , 'description': 'ticket'
    , 'aliases': [
      'ticket'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚦'
    , 'description': 'vertical traffic light'
    , 'aliases': [
      'vertical_traffic_light'
    ]
    , 'tags': [
      'semaphore'
    ]
  }
  , {
    'emoji': '🚥'
    , 'description': 'horizontal traffic light'
    , 'aliases': [
      'traffic_light'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⚠️'
    , 'description': 'warning sign'
    , 'aliases': [
      'warning'
    ]
    , 'tags': [
      'wip'
    ]
  }
  , {
    'emoji': '🚧'
    , 'description': 'construction sign'
    , 'aliases': [
      'construction'
    ]
    , 'tags': [
      'wip'
    ]
  }
  , {
    'emoji': '🔰'
    , 'description': 'japanese symbol for beginner'
    , 'aliases': [
      'beginner'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⛽'
    , 'description': 'fuel pump'
    , 'aliases': [
      'fuelpump'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🏮'
    , 'description': 'izakaya lantern'
    , 'aliases': [
      'izakaya_lantern'
      , 'lantern'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎰'
    , 'description': 'slot machine'
    , 'aliases': [
      'slot_machine'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '♨️'
    , 'description': 'hot springs'
    , 'aliases': [
      'hotsprings'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🗿'
    , 'description': 'moyai'
    , 'aliases': [
      'moyai'
    ]
    , 'tags': [
      'stone'
    ]
  }
  , {
    'emoji': '🎪'
    , 'description': 'circus tent'
    , 'aliases': [
      'circus_tent'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🎭'
    , 'description': 'performing arts'
    , 'aliases': [
      'performing_arts'
    ]
    , 'tags': [
      'theater'
      , 'drama'
    ]
  }
  , {
    'emoji': '📍'
    , 'description': 'round pushpin'
    , 'aliases': [
      'round_pushpin'
    ]
    , 'tags': [
      'location'
    ]
  }
  , {
    'emoji': '🚩'
    , 'description': 'triangular flag on post'
    , 'aliases': [
      'triangular_flag_on_post'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🇯🇵'
    , 'description': 'regional indicator symbol letter j + regional indicator symbol letter p'
    , 'aliases': [
      'jp'
    ]
    , 'tags': [
      'japan'
    ]
  }
  , {
    'emoji': '🇰🇷'
    , 'description': 'regional indicator symbol letter k + regional indicator symbol letter r'
    , 'aliases': [
      'kr'
    ]
    , 'tags': [
      'korea'
    ]
  }
  , {
    'emoji': '🇩🇪'
    , 'description': 'regional indicator symbol letter d + regional indicator symbol letter e'
    , 'aliases': [
      'de'
    ]
    , 'tags': [
      'flag'
      , 'germany'
    ]
  }
  , {
    'emoji': '🇨🇳'
    , 'description': 'regional indicator symbol letter c + regional indicator symbol letter n'
    , 'aliases': [
      'cn'
    ]
    , 'tags': [
      'china'
    ]
  }
  , {
    'emoji': '🇺🇸'
    , 'description': 'regional indicator symbol letter u + regional indicator symbol letter s'
    , 'aliases': [
      'us'
    ]
    , 'tags': [
      'flag'
      , 'united'
      , 'america'
    ]
  }
  , {
    'emoji': '🇫🇷'
    , 'description': 'regional indicator symbol letter f + regional indicator symbol letter r'
    , 'aliases': [
      'fr'
    ]
    , 'tags': [
      'france'
      , 'french'
    ]
  }
  , {
    'emoji': '🇪🇸'
    , 'description': 'regional indicator symbol letter e + regional indicator symbol letter s'
    , 'aliases': [
      'es'
    ]
    , 'tags': [
      'spain'
    ]
  }
  , {
    'emoji': '🇮🇹'
    , 'description': 'regional indicator symbol letter i + regional indicator symbol letter t'
    , 'aliases': [
      'it'
    ]
    , 'tags': [
      'italy'
    ]
  }
  , {
    'emoji': '🇷🇺'
    , 'description': 'regional indicator symbol letter r + regional indicator symbol letter u'
    , 'aliases': [
      'ru'
    ]
    , 'tags': [
      'russia'
    ]
  }
  , {
    'emoji': '🇬🇧'
    , 'description': 'regional indicator symbol letter g + regional indicator symbol letter b'
    , 'aliases': [
      'gb'
      , 'uk'
    ]
    , 'tags': [
      'flag'
      , 'british'
    ]
  }
  , {
    'emoji': '1️⃣'
    , 'description': 'digit one + combining enclosing keycap'
    , 'aliases': [
      'one'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '2️⃣'
    , 'description': 'digit two + combining enclosing keycap'
    , 'aliases': [
      'two'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '3️⃣'
    , 'description': 'digit three + combining enclosing keycap'
    , 'aliases': [
      'three'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '4️⃣'
    , 'description': 'digit four + combining enclosing keycap'
    , 'aliases': [
      'four'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '5️⃣'
    , 'description': 'digit five + combining enclosing keycap'
    , 'aliases': [
      'five'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '6️⃣'
    , 'description': 'digit six + combining enclosing keycap'
    , 'aliases': [
      'six'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '7️⃣'
    , 'description': 'digit seven + combining enclosing keycap'
    , 'aliases': [
      'seven'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '8️⃣'
    , 'description': 'digit eight + combining enclosing keycap'
    , 'aliases': [
      'eight'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '9️⃣'
    , 'description': 'digit nine + combining enclosing keycap'
    , 'aliases': [
      'nine'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '0️⃣'
    , 'description': 'digit zero + combining enclosing keycap'
    , 'aliases': [
      'zero'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔟'
    , 'description': 'keycap ten'
    , 'aliases': [
      'keycap_ten'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔢'
    , 'description': 'input symbol for numbers'
    , 'aliases': [
      '1234'
    ]
    , 'tags': [
      'numbers'
    ]
  }
  , {
    'emoji': '#️⃣'
    , 'description': 'number sign + combining enclosing keycap'
    , 'aliases': [
      'hash'
    ]
    , 'tags': [
      'number'
    ]
  }
  , {
    'emoji': '🔣'
    , 'description': 'input symbol for symbols'
    , 'aliases': [
      'symbols'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⬆️'
    , 'description': 'upwards black arrow'
    , 'aliases': [
      'arrow_up'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⬇️'
    , 'description': 'downwards black arrow'
    , 'aliases': [
      'arrow_down'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⬅️'
    , 'description': 'leftwards black arrow'
    , 'aliases': [
      'arrow_left'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '➡️'
    , 'description': 'black rightwards arrow'
    , 'aliases': [
      'arrow_right'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔠'
    , 'description': 'input symbol for latin capital letters'
    , 'aliases': [
      'capital_abcd'
    ]
    , 'tags': [
      'letters'
    ]
  }
  , {
    'emoji': '🔡'
    , 'description': 'input symbol for latin small letters'
    , 'aliases': [
      'abcd'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔤'
    , 'description': 'input symbol for latin letters'
    , 'aliases': [
      'abc'
    ]
    , 'tags': [
      'alphabet'
    ]
  }
  , {
    'emoji': '↗️'
    , 'description': 'north east arrow'
    , 'aliases': [
      'arrow_upper_right'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '↖️'
    , 'description': 'north west arrow'
    , 'aliases': [
      'arrow_upper_left'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '↘️'
    , 'description': 'south east arrow'
    , 'aliases': [
      'arrow_lower_right'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '↙️'
    , 'description': 'south west arrow'
    , 'aliases': [
      'arrow_lower_left'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '↔️'
    , 'description': 'left right arrow'
    , 'aliases': [
      'left_right_arrow'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '↕️'
    , 'description': 'up down arrow'
    , 'aliases': [
      'arrow_up_down'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔄'
    , 'description': 'anticlockwise downwards and upwards open circle arrows'
    , 'aliases': [
      'arrows_counterclockwise'
    ]
    , 'tags': [
      'sync'
    ]
  }
  , {
    'emoji': '◀️'
    , 'description': 'black left-pointing triangle'
    , 'aliases': [
      'arrow_backward'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '▶️'
    , 'description': 'black right-pointing triangle'
    , 'aliases': [
      'arrow_forward'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔼'
    , 'description': 'up-pointing small red triangle'
    , 'aliases': [
      'arrow_up_small'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔽'
    , 'description': 'down-pointing small red triangle'
    , 'aliases': [
      'arrow_down_small'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '↩️'
    , 'description': 'leftwards arrow with hook'
    , 'aliases': [
      'leftwards_arrow_with_hook'
    ]
    , 'tags': [
      'return'
    ]
  }
  , {
    'emoji': '↪️'
    , 'description': 'rightwards arrow with hook'
    , 'aliases': [
      'arrow_right_hook'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': 'ℹ️'
    , 'description': 'information source'
    , 'aliases': [
      'information_source'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⏪'
    , 'description': 'black left-pointing double triangle'
    , 'aliases': [
      'rewind'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⏩'
    , 'description': 'black right-pointing double triangle'
    , 'aliases': [
      'fast_forward'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⏫'
    , 'description': 'black up-pointing double triangle'
    , 'aliases': [
      'arrow_double_up'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⏬'
    , 'description': 'black down-pointing double triangle'
    , 'aliases': [
      'arrow_double_down'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⤵️'
    , 'description': 'arrow pointing rightwards then curving downwards'
    , 'aliases': [
      'arrow_heading_down'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⤴️'
    , 'description': 'arrow pointing rightwards then curving upwards'
    , 'aliases': [
      'arrow_heading_up'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🆗'
    , 'description': 'squared ok'
    , 'aliases': [
      'ok'
    ]
    , 'tags': [
      'yes'
    ]
  }
  , {
    'emoji': '🔀'
    , 'description': 'twisted rightwards arrows'
    , 'aliases': [
      'twisted_rightwards_arrows'
    ]
    , 'tags': [
      'shuffle'
    ]
  }
  , {
    'emoji': '🔁'
    , 'description': 'clockwise rightwards and leftwards open circle arrows'
    , 'aliases': [
      'repeat'
    ]
    , 'tags': [
      'loop'
    ]
  }
  , {
    'emoji': '🔂'
    , 'description': 'clockwise rightwards and leftwards open circle arrows with circled one overlay'
    , 'aliases': [
      'repeat_one'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🆕'
    , 'description': 'squared new'
    , 'aliases': [
      'new'
    ]
    , 'tags': [
      'fresh'
    ]
  }
  , {
    'emoji': '🆙'
    , 'description': 'squared up with exclamation mark'
    , 'aliases': [
      'up'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🆒'
    , 'description': 'squared cool'
    , 'aliases': [
      'cool'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🆓'
    , 'description': 'squared free'
    , 'aliases': [
      'free'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🆖'
    , 'description': 'squared ng'
    , 'aliases': [
      'ng'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📶'
    , 'description': 'antenna with bars'
    , 'aliases': [
      'signal_strength'
    ]
    , 'tags': [
      'wifi'
    ]
  }
  , {
    'emoji': '🎦'
    , 'description': 'cinema'
    , 'aliases': [
      'cinema'
    ]
    , 'tags': [
      'film'
      , 'movie'
    ]
  }
  , {
    'emoji': '🈁'
    , 'description': 'squared katakana koko'
    , 'aliases': [
      'koko'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🈯'
    , 'description': 'squared cjk unified ideograph-6307'
    , 'aliases': [
      'u6307'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🈳'
    , 'description': 'squared cjk unified ideograph-7a7a'
    , 'aliases': [
      'u7a7a'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🈵'
    , 'description': 'squared cjk unified ideograph-6e80'
    , 'aliases': [
      'u6e80'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🈴'
    , 'description': 'squared cjk unified ideograph-5408'
    , 'aliases': [
      'u5408'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🈲'
    , 'description': 'squared cjk unified ideograph-7981'
    , 'aliases': [
      'u7981'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🉐'
    , 'description': 'circled ideograph advantage'
    , 'aliases': [
      'ideograph_advantage'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🈹'
    , 'description': 'squared cjk unified ideograph-5272'
    , 'aliases': [
      'u5272'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🈺'
    , 'description': 'squared cjk unified ideograph-55b6'
    , 'aliases': [
      'u55b6'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🈶'
    , 'description': 'squared cjk unified ideograph-6709'
    , 'aliases': [
      'u6709'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🈚'
    , 'description': 'squared cjk unified ideograph-7121'
    , 'aliases': [
      'u7121'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚻'
    , 'description': 'restroom'
    , 'aliases': [
      'restroom'
    ]
    , 'tags': [
      'toilet'
    ]
  }
  , {
    'emoji': '🚹'
    , 'description': 'mens symbol'
    , 'aliases': [
      'mens'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚺'
    , 'description': 'womens symbol'
    , 'aliases': [
      'womens'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚼'
    , 'description': 'baby symbol'
    , 'aliases': [
      'baby_symbol'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚾'
    , 'description': 'water closet'
    , 'aliases': [
      'wc'
    ]
    , 'tags': [
      'toilet'
      , 'restroom'
    ]
  }
  , {
    'emoji': '🚰'
    , 'description': 'potable water symbol'
    , 'aliases': [
      'potable_water'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚮'
    , 'description': 'put litter in its place symbol'
    , 'aliases': [
      'put_litter_in_its_place'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🅿️'
    , 'description': 'negative squared latin capital letter p'
    , 'aliases': [
      'parking'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '♿'
    , 'description': 'wheelchair symbol'
    , 'aliases': [
      'wheelchair'
    ]
    , 'tags': [
      'accessibility'
    ]
  }
  , {
    'emoji': '🚭'
    , 'description': 'no smoking symbol'
    , 'aliases': [
      'no_smoking'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🈷️'
    , 'description': 'squared cjk unified ideograph-6708'
    , 'aliases': [
      'u6708'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🈸'
    , 'description': 'squared cjk unified ideograph-7533'
    , 'aliases': [
      'u7533'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🈂️'
    , 'description': 'squared katakana sa'
    , 'aliases': [
      'sa'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': 'Ⓜ️'
    , 'description': 'circled latin capital letter m'
    , 'aliases': [
      'm'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🛂'
    , 'description': 'passport control'
    , 'aliases': [
      'passport_control'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🛄'
    , 'description': 'baggage claim'
    , 'aliases': [
      'baggage_claim'
    ]
    , 'tags': [
      'airport'
    ]
  }
  , {
    'emoji': '🛅'
    , 'description': 'left luggage'
    , 'aliases': [
      'left_luggage'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🛃'
    , 'description': 'customs'
    , 'aliases': [
      'customs'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🉑'
    , 'description': 'circled ideograph accept'
    , 'aliases': [
      'accept'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '㊙️'
    , 'description': 'circled ideograph secret'
    , 'aliases': [
      'secret'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '㊗️'
    , 'description': 'circled ideograph congratulation'
    , 'aliases': [
      'congratulations'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🆑'
    , 'description': 'squared cl'
    , 'aliases': [
      'cl'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🆘'
    , 'description': 'squared sos'
    , 'aliases': [
      'sos'
    ]
    , 'tags': [
      'help'
      , 'emergency'
    ]
  }
  , {
    'emoji': '🆔'
    , 'description': 'squared id'
    , 'aliases': [
      'id'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚫'
    , 'description': 'no entry sign'
    , 'aliases': [
      'no_entry_sign'
    ]
    , 'tags': [
      'block'
      , 'forbidden'
    ]
  }
  , {
    'emoji': '🔞'
    , 'description': 'no one under eighteen symbol'
    , 'aliases': [
      'underage'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📵'
    , 'description': 'no mobile phones'
    , 'aliases': [
      'no_mobile_phones'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚯'
    , 'description': 'do not litter symbol'
    , 'aliases': [
      'do_not_litter'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚱'
    , 'description': 'non-potable water symbol'
    , 'aliases': [
      'non-potable_water'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚳'
    , 'description': 'no bicycles'
    , 'aliases': [
      'no_bicycles'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚷'
    , 'description': 'no pedestrians'
    , 'aliases': [
      'no_pedestrians'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🚸'
    , 'description': 'children crossing'
    , 'aliases': [
      'children_crossing'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⛔'
    , 'description': 'no entry'
    , 'aliases': [
      'no_entry'
    ]
    , 'tags': [
      'limit'
    ]
  }
  , {
    'emoji': '✳️'
    , 'description': 'eight spoked asterisk'
    , 'aliases': [
      'eight_spoked_asterisk'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '❇️'
    , 'description': 'sparkle'
    , 'aliases': [
      'sparkle'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '❎'
    , 'description': 'negative squared cross mark'
    , 'aliases': [
      'negative_squared_cross_mark'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '✅'
    , 'description': 'white heavy check mark'
    , 'aliases': [
      'white_check_mark'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '✴️'
    , 'description': 'eight pointed black star'
    , 'aliases': [
      'eight_pointed_black_star'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💟'
    , 'description': 'heart decoration'
    , 'aliases': [
      'heart_decoration'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🆚'
    , 'description': 'squared vs'
    , 'aliases': [
      'vs'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📳'
    , 'description': 'vibration mode'
    , 'aliases': [
      'vibration_mode'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '📴'
    , 'description': 'mobile phone off'
    , 'aliases': [
      'mobile_phone_off'
    ]
    , 'tags': [
      'mute'
      , 'off'
    ]
  }
  , {
    'emoji': '🅰️'
    , 'description': 'negative squared latin capital letter a'
    , 'aliases': [
      'a'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🅱️'
    , 'description': 'negative squared latin capital letter b'
    , 'aliases': [
      'b'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🆎'
    , 'description': 'negative squared ab'
    , 'aliases': [
      'ab'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🅾️'
    , 'description': 'negative squared latin capital letter o'
    , 'aliases': [
      'o2'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💠'
    , 'description': 'diamond shape with a dot inside'
    , 'aliases': [
      'diamond_shape_with_a_dot_inside'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '➿'
    , 'description': 'double curly loop'
    , 'aliases': [
      'loop'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '♻️'
    , 'description': 'black universal recycling symbol'
    , 'aliases': [
      'recycle'
    ]
    , 'tags': [
      'environment'
      , 'green'
    ]
  }
  , {
    'emoji': '♈'
    , 'description': 'aries'
    , 'aliases': [
      'aries'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '♉'
    , 'description': 'taurus'
    , 'aliases': [
      'taurus'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '♊'
    , 'description': 'gemini'
    , 'aliases': [
      'gemini'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '♋'
    , 'description': 'cancer'
    , 'aliases': [
      'cancer'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '♌'
    , 'description': 'leo'
    , 'aliases': [
      'leo'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '♍'
    , 'description': 'virgo'
    , 'aliases': [
      'virgo'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '♎'
    , 'description': 'libra'
    , 'aliases': [
      'libra'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '♏'
    , 'description': 'scorpius'
    , 'aliases': [
      'scorpius'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '♐'
    , 'description': 'sagittarius'
    , 'aliases': [
      'sagittarius'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '♑'
    , 'description': 'capricorn'
    , 'aliases': [
      'capricorn'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '♒'
    , 'description': 'aquarius'
    , 'aliases': [
      'aquarius'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '♓'
    , 'description': 'pisces'
    , 'aliases': [
      'pisces'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⛎'
    , 'description': 'ophiuchus'
    , 'aliases': [
      'ophiuchus'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔯'
    , 'description': 'six pointed star with middle dot'
    , 'aliases': [
      'six_pointed_star'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🏧'
    , 'description': 'automated teller machine'
    , 'aliases': [
      'atm'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💹'
    , 'description': 'chart with upwards trend and yen sign'
    , 'aliases': [
      'chart'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💲'
    , 'description': 'heavy dollar sign'
    , 'aliases': [
      'heavy_dollar_sign'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💱'
    , 'description': 'currency exchange'
    , 'aliases': [
      'currency_exchange'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '©️'
    , 'description': 'copyright sign'
    , 'aliases': [
      'copyright'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '®️'
    , 'description': 'registered sign'
    , 'aliases': [
      'registered'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '™️'
    , 'description': 'trade mark sign'
    , 'aliases': [
      'tm'
    ]
    , 'tags': [
      'trademark'
    ]
  }
  , {
    'emoji': '❌'
    , 'description': 'cross mark'
    , 'aliases': [
      'x'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '‼️'
    , 'description': 'double exclamation mark'
    , 'aliases': [
      'bangbang'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⁉️'
    , 'description': 'exclamation question mark'
    , 'aliases': [
      'interrobang'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '❗'
    , 'description': 'heavy exclamation mark symbol'
    , 'aliases': [
      'exclamation'
      , 'heavy_exclamation_mark'
    ]
    , 'tags': [
      'bang'
    ]
  }
  , {
    'emoji': '❓'
    , 'description': 'black question mark ornament'
    , 'aliases': [
      'question'
    ]
    , 'tags': [
      'confused'
    ]
  }
  , {
    'emoji': '❕'
    , 'description': 'white exclamation mark ornament'
    , 'aliases': [
      'grey_exclamation'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '❔'
    , 'description': 'white question mark ornament'
    , 'aliases': [
      'grey_question'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⭕'
    , 'description': 'heavy large circle'
    , 'aliases': [
      'o'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔝'
    , 'description': 'top with upwards arrow above'
    , 'aliases': [
      'top'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔚'
    , 'description': 'end with leftwards arrow above'
    , 'aliases': [
      'end'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔙'
    , 'description': 'back with leftwards arrow above'
    , 'aliases': [
      'back'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔛'
    , 'description': 'on with exclamation mark with left right arrow above'
    , 'aliases': [
      'on'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔜'
    , 'description': 'soon with rightwards arrow above'
    , 'aliases': [
      'soon'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔃'
    , 'description': 'clockwise downwards and upwards open circle arrows'
    , 'aliases': [
      'arrows_clockwise'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕛'
    , 'description': 'clock face twelve oclock'
    , 'aliases': [
      'clock12'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕧'
    , 'description': 'clock face twelve-thirty'
    , 'aliases': [
      'clock1230'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕐'
    , 'description': 'clock face one oclock'
    , 'aliases': [
      'clock1'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕜'
    , 'description': 'clock face one-thirty'
    , 'aliases': [
      'clock130'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕑'
    , 'description': 'clock face two oclock'
    , 'aliases': [
      'clock2'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕝'
    , 'description': 'clock face two-thirty'
    , 'aliases': [
      'clock230'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕒'
    , 'description': 'clock face three oclock'
    , 'aliases': [
      'clock3'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕞'
    , 'description': 'clock face three-thirty'
    , 'aliases': [
      'clock330'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕓'
    , 'description': 'clock face four oclock'
    , 'aliases': [
      'clock4'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕟'
    , 'description': 'clock face four-thirty'
    , 'aliases': [
      'clock430'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕔'
    , 'description': 'clock face five oclock'
    , 'aliases': [
      'clock5'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕠'
    , 'description': 'clock face five-thirty'
    , 'aliases': [
      'clock530'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕕'
    , 'description': 'clock face six oclock'
    , 'aliases': [
      'clock6'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕖'
    , 'description': 'clock face seven oclock'
    , 'aliases': [
      'clock7'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕗'
    , 'description': 'clock face eight oclock'
    , 'aliases': [
      'clock8'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕘'
    , 'description': 'clock face nine oclock'
    , 'aliases': [
      'clock9'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕙'
    , 'description': 'clock face ten oclock'
    , 'aliases': [
      'clock10'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕚'
    , 'description': 'clock face eleven oclock'
    , 'aliases': [
      'clock11'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕡'
    , 'description': 'clock face six-thirty'
    , 'aliases': [
      'clock630'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕢'
    , 'description': 'clock face seven-thirty'
    , 'aliases': [
      'clock730'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕣'
    , 'description': 'clock face eight-thirty'
    , 'aliases': [
      'clock830'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕤'
    , 'description': 'clock face nine-thirty'
    , 'aliases': [
      'clock930'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕥'
    , 'description': 'clock face ten-thirty'
    , 'aliases': [
      'clock1030'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🕦'
    , 'description': 'clock face eleven-thirty'
    , 'aliases': [
      'clock1130'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '✖️'
    , 'description': 'heavy multiplication x'
    , 'aliases': [
      'heavy_multiplication_x'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '➕'
    , 'description': 'heavy plus sign'
    , 'aliases': [
      'heavy_plus_sign'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '➖'
    , 'description': 'heavy minus sign'
    , 'aliases': [
      'heavy_minus_sign'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '➗'
    , 'description': 'heavy division sign'
    , 'aliases': [
      'heavy_division_sign'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '♠️'
    , 'description': 'black spade suit'
    , 'aliases': [
      'spades'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '♥️'
    , 'description': 'black heart suit'
    , 'aliases': [
      'hearts'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '♣️'
    , 'description': 'black club suit'
    , 'aliases': [
      'clubs'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '♦️'
    , 'description': 'black diamond suit'
    , 'aliases': [
      'diamonds'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💮'
    , 'description': 'white flower'
    , 'aliases': [
      'white_flower'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '💯'
    , 'description': 'hundred points symbol'
    , 'aliases': [
      '100'
    ]
    , 'tags': [
      'score'
      , 'perfect'
    ]
  }
  , {
    'emoji': '✔️'
    , 'description': 'heavy check mark'
    , 'aliases': [
      'heavy_check_mark'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '☑️'
    , 'description': 'ballot box with check'
    , 'aliases': [
      'ballot_box_with_check'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔘'
    , 'description': 'radio button'
    , 'aliases': [
      'radio_button'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔗'
    , 'description': 'link symbol'
    , 'aliases': [
      'link'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '➰'
    , 'description': 'curly loop'
    , 'aliases': [
      'curly_loop'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '〰️'
    , 'description': 'wavy dash'
    , 'aliases': [
      'wavy_dash'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '〽️'
    , 'description': 'part alternation mark'
    , 'aliases': [
      'part_alternation_mark'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔱'
    , 'description': 'trident emblem'
    , 'aliases': [
      'trident'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '◼️'
    , 'description': 'black medium square'
    , 'aliases': [
      'black_medium_square'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '◻️'
    , 'description': 'white medium square'
    , 'aliases': [
      'white_medium_square'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '◾'
    , 'description': 'black medium small square'
    , 'aliases': [
      'black_medium_small_square'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '◽'
    , 'description': 'white medium small square'
    , 'aliases': [
      'white_medium_small_square'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '▪️'
    , 'description': 'black small square'
    , 'aliases': [
      'black_small_square'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '▫️'
    , 'description': 'white small square'
    , 'aliases': [
      'white_small_square'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔺'
    , 'description': 'up-pointing red triangle'
    , 'aliases': [
      'small_red_triangle'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔲'
    , 'description': 'black square button'
    , 'aliases': [
      'black_square_button'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔳'
    , 'description': 'white square button'
    , 'aliases': [
      'white_square_button'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⚫'
    , 'description': 'medium black circle'
    , 'aliases': [
      'black_circle'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⚪'
    , 'description': 'medium white circle'
    , 'aliases': [
      'white_circle'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔴'
    , 'description': 'large red circle'
    , 'aliases': [
      'red_circle'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔵'
    , 'description': 'large blue circle'
    , 'aliases': [
      'large_blue_circle'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔻'
    , 'description': 'down-pointing red triangle'
    , 'aliases': [
      'small_red_triangle_down'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⬜'
    , 'description': 'white large square'
    , 'aliases': [
      'white_large_square'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '⬛'
    , 'description': 'black large square'
    , 'aliases': [
      'black_large_square'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔶'
    , 'description': 'large orange diamond'
    , 'aliases': [
      'large_orange_diamond'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔷'
    , 'description': 'large blue diamond'
    , 'aliases': [
      'large_blue_diamond'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔸'
    , 'description': 'small orange diamond'
    , 'aliases': [
      'small_orange_diamond'
    ]
    , 'tags': [
    ]
  }
  , {
    'emoji': '🔹'
    , 'description': 'small blue diamond'
    , 'aliases': [
      'small_blue_diamond'
    ]
    , 'tags': [
    ]
  }
  , {
    'aliases': [
      'basecamp'
    ]
    , 'tags': [
    ]
  }
  , {
    'aliases': [
      'basecampy'
    ]
    , 'tags': [
    ]
  }
  , {
    'aliases': [
      'bowtie'
    ]
    , 'tags': [
    ]
  }
  , {
    'aliases': [
      'feelsgood'
    ]
    , 'tags': [
    ]
  }
  , {
    'aliases': [
      'finnadie'
    ]
    , 'tags': [
    ]
  }
  , {
    'aliases': [
      'fu'
    ]
    , 'tags': [
    ]
  }
  , {
    'aliases': [
      'goberserk'
    ]
    , 'tags': [
    ]
  }
  , {
    'aliases': [
      'godmode'
    ]
    , 'tags': [
    ]
  }
  , {
    'aliases': [
      'hurtrealbad'
    ]
    , 'tags': [
    ]
  }
  , {
    'aliases': [
      'metal'
    ]
    , 'tags': [
    ]
  }
  , {
    'aliases': [
      'neckbeard'
    ]
    , 'tags': [
    ]
  }
  , {
    'aliases': [
      'octocat'
    ]
    , 'tags': [
    ]
  }
  , {
    'aliases': [
      'rage1'
    ]
    , 'tags': [
    ]
  }
  , {
    'aliases': [
      'rage2'
    ]
    , 'tags': [
    ]
  }
  , {
    'aliases': [
      'rage3'
    ]
    , 'tags': [
    ]
  }
  , {
    'aliases': [
      'rage4'
    ]
    , 'tags': [
    ]
  }
  , {
    'aliases': [
      'shipit'
      , 'squirrel'
    ]
    , 'tags': [
    ]
  }
  , {
    'aliases': [
      'suspect'
    ]
    , 'tags': [
    ]
  }
  , {
    'aliases': [
      'taco'
    ]
    , 'tags': [
    ]
  }
  , {
    'aliases': [
      'trollface'
    ]
    , 'tags': [
    ]
  }
];

function getEmoji(alias: string): any {
  return _.find(emojis, (emoji) => {
    return _.contains(emoji.aliases, alias);
  });
}

const api = {
  getEmoji
};

export {
  api
}
