---
layout: base.liquid
tags: post
ptitle: "Rootless Root"
title: "The Unix Koans of Master Foo"
---

### To which are also appended, other supplementary works that appear in the text.

31/10/2024


# Table of Contents

1.  [Rootless Root](#rootless-root)
    1.  [Editor&rsquo;s Introduction](#org17b6dd1)
    2.  [Master Foo and the Ten Thousand Lines](#org0b431e3)
    3.  [Master Foo and the Script Kiddie](#org402414e)
    4.  [Master Foo Discourses on the Two Paths](#orgda08b0b)
    5.  [Master Foo and the Methodologist](#org8586f65)
    6.  [Master Foo Discourses on the Graphical User Interface](#org8d245e4)
    7.  [Master Foo and the Old Hand](#org33d61f0)
    8.  [Master Foo and the Shell Tools](#orgca04ce1)
    9.  [Master Foo and the Nervous Novice](#org64b5891)
    10. [Master Foo and the Recruiter](#org54b47a4)
    11. [Master Foo Discourses on Returning to Windows](#org913d8be)
    12. [Master Foo and the Unix Zealot](#orgb656315)
    13. [Master Foo Discourses on the Unix-Nature](#org6313773)
    14. [Master Foo and the MCSE](#org5b07876)
    15. [Master Foo and the End User](#orgcfa6da3)
    16. [Master Foo and the Programming Prodigy](#org5276fd8)
    17. [Master Foo and the Hardware Designer](#org78526f9)
2.  [The Unix Power Classic](#the-unix-power-clasic)
    1.  [The Unix Power Classic: A book about the Unix Way and its power](#org4f84f1f)
    2.  [01](#orgcdf0d54)
    3.  [04](#orgf0461b1)
    4.  [07](#org284030b)
    5.  [08](#orgbd6ab03)
    6.  [09](#org26cc373)
    7.  [15](#orgaa60e77)
    8.  [17](#org4196b82)
    9.  [18](#org1e895fe)
    10. [21](#org5a46702)
    11. [23](#orgb070ea5)
    12. [28](#orgb0a471f)
    13. [34](#orgc599e6e)
    14. [39](#org66c0383)
    15. [40](#org2672601)
    16. [41](#org25df766)
    17. [42](#org3601ede)
    18. [43](#org19a7d73)
    19. [48](#org1016e3a)
    20. [53](#org7571438)
    21. [57](#org3a9da71)
    22. [60](#orgffc6d56)
    23. [63](#orgbca6a5a)
    24. [65](#org3a811cf)
    25. [67](#orgc5622e9)
    26. [68](#org23e1963)
    27. [71](#org40144a5)
    28. [72](#org9d8470c)
    29. [79](#org85491ef)
    30. [81](#orgb5147a1)
3.  [AI Koans](#ai-koans)
4.  [LoginTaka](#logintaka)
5.  [Tales of Zen Master Greg](#tales-of-zen-master-greg)
6.  [The Tao of Programming](#the-tao-of-programming)
    1.  [Book 1 &#x2013; The Silent Void](#org13fa640)
    2.  [Book 2 &#x2013; The Ancient Masters](#orgb6ea1ad)
    3.  [Book 3 &#x2013; Design](#org6736b23)
    4.  [Book 4 &#x2013; Coding](#orga79170c)
    5.  [Book 5 &#x2013; Maintenance](#orgb9d9db1)
    6.  [Book 6 &#x2013; Management](#org967b391)
    7.  [Book 7 &#x2013; Corporate Wisdom](#orge55fea4)
    8.  [Book 8 &#x2013; Hardware and Software](#org1ea0721)
    9.  [Book 9 &#x2013; Epilogue](#orgafb0c98)


# Rootless Root

Editor&rsquo;s Note:

> These are usually found at [catb.org](https://catb.org/~esr/writings/unix-koans/) maintained by [ESR](http://www.catb.org/~esr/). However the website
> usually has SSL issues, and also it references other works which are no longer
> available, so this is an attempt to consolidate all of them in one place.

![img](../_assets/rootlessroot.png "&ldquo;無根的根&rdquo;")


## Editor&rsquo;s Introduction

The discovery of the collection of koans known as the Rootless Root,
apparently preserved for decades in the dry upper air of the Western
Mountains, has ignited great controversy in scholarly circles. Are these
authentic documents shedding new light on the teaching of the early Unix
patriarchs? Or are they clever pastiches from a later age, commanding
the authority of semi-mythical figures such as the Patriarchs Thompson,
Ritchie and McIlroy for doctrines which evolved closer to our own era?

It is impossible to say for certain. All sides in the dispute have made
much of an alleged similarity to that venerable classic,
[The Tao of Programming](#the-tao-of-programming). But Rootless Root
is quite different in tone and style from the loose, poetic anecdotes of
the James translation, focused as it is on the remarkable and enigmatic
figure of Master Foo.

A newer work, [the Unix Power Classic](#the-unix-power-clasic), translates the Tao Te Ching into an
idiom similar to that of Rootless Root. Unix Power Classic may well have been
influenced by Rootless Root, or further research may disclose that they had
common sources.

It would be more apposite to seek parallels in the [AI Koans](#ai-koans);
indeed, there are textual clues that the author of the Rootless Root may
have redacted certain versions of the AI Koans. We are also on much
firmer ground in seeking connections with the [Loginataka](#logintaka); indeed,
it is quite possible that the unknown authors of Rootless Root and of
Loginataka were one and the same person, possibly a student of Master
Foo himself.

Mention should also be made of the [Tales of Zen Master Greg](#tales-of-zen-master-greg), though
the Nine Inch Nails references have cast some doubt on their antiquity
and it is thus unlikely that they influenced Rootless Root.

A newer work, [the Unix Power Classic](#the-unix-power-clasic), translates the Tao Te Ching into an
idiom similar to that of Rootless Root. Unix Power Classic may well have been
influenced by Rootless Root, or further research may disclose that they had
common sources.

That the title of the work was intended as a reference to the Zen
classic [Gateless Gate](https://en.wikipedia.org/wiki/The_Gateless_Barrier) of Mumon, we can say with fair confidence.
There are echoes of Mumon in several of the koans.

There is considerable dispute over whether Master Foo should be assigned
to the Eastern (New Jersey) School, or the Western School that grew out
of the Patriarch Thompson&rsquo;s epochal early journey to Berkeley. If this
question has not been settled, it is perhaps because we cannot even
establish that Master Foo ever existed! He might merely be a composite
of a group of teachers, or of an entire dharma lineage.

Even supposing the legend of Master Foo accreted around the teaching of
some a single person, what of his favored student Nubi? Nubi has all the
earmarks of a stock figure, the perfect disciple. One is reminded of the
tales surrounding the Buddha&rsquo;s favorite follower Ananda. It seems likely
that there was a historical Ananda, but no trace of his actual
personality has survived the euhemerizing process by which the life of
the Buddha was polished into timeless myth.

In the end, all we can do is take these teaching stories on their own
terms, and extract what kernels of wisdom may be found there.

The redaction of the Rootless Root is a work in progress, as the source
materials present many difficulties in reconstruction and
interpretation. Future versions may include more stories as these
difficulties are overcome.


## Master Foo and the Ten Thousand Lines

Master Foo once said to a visiting programmer: “There is more Unix-nature in one
line of shell script than there is in ten thousand lines of C”.

The programmer, who was very proud of his mastery of C, said: “How can this be?
C is the language in which the very kernel of Unix is implemented!”

Master Foo replied: “That is so. Nevertheless, there is more Unix-nature in one
line of shell script than there is in ten thousand lines of C”.

The programmer grew distressed. “But through the C language we experience the
enlightenment of the Patriarch Ritchie! We become as one with the operating
system and the machine, reaping matchless performance!”

Master Foo replied: “All that you say is true. But there is still more
Unix-nature in one line of shell script than there is in ten thousand lines of
C”.

The programmer scoffed at Master Foo and rose to depart. But Master Foo nodded
to his student Nubi, who wrote a line of shell script on a nearby whiteboard,
and said: “Master programmer, consider this pipeline. Implemented in pure C,
would it not span ten thousand lines?”

The programmer muttered through his beard, contemplating what Nubi had written.
Finally he agreed that it was so.

“And how many hours would you require to implement and debug that C program?”
asked Nubi.

“Many”, admitted the visiting programmer. “But only a fool would spend the time
to do that when so many more worthy tasks await him”.

“And who better understands the Unix-nature?” Master Foo asked. “Is it he who
writes the ten thousand lines, or he who, perceiving the emptiness of the task,
gains merit by not coding?”

Upon hearing this, the programmer was enlightened.


## Master Foo and the Script Kiddie

A stranger from the land of Woot came to Master Foo as he was eating the morning
meal with his students.

“I hear y00 are very l33t”, he said. “Pl33z teach m3 all y00 know”.

Master Foo&rsquo;s students looked at each other, confused by the stranger&rsquo;s barbarous
language. Master Foo just smiled and replied: “You wish to learn the Way of
Unix?”

“I want to b3 a wizard hax0r”, the stranger replied, “and 0wn ever3one&rsquo;s b0xen”.

“I do not teach that Way”, replied Master Foo.

The stranger grew agitated. “D00d, y00 r nothing but a p0ser”, he said. “If y00
n00 anything, y00 wud t33ch m3”.

“There is a path”, said Master Foo, “that might bring you to wisdom”. The master
scribbled an IP address on a piece of paper. “Cracking this box should pose you
little difficulty, as its guardians are incompetent. Return and tell me what you
find”.

The stranger bowed and left. Master Foo finished his meal.

Days passed, then months. The stranger was forgotten.

Years later, the stranger from the land of Woot returned.

“Damn you!” he said, “I cracked that box, and it was easy like you said. But I
got busted by the FBI and thrown in jail”.

“Good”, said Master Foo. “You are ready for the next lesson”. He scribbled an IP
address on another piece of paper and handed it to the stranger.

“Are you crazy?” the stranger yelled. “After what I&rsquo;ve been through, I&rsquo;m never
going to break into a computer again!”

Master Foo smiled. “Here”, he said, “is the beginning of wisdom”.

On hearing this, the stranger was enlightened.


## Master Foo Discourses on the Two Paths

Master Foo instructed his students:

“There is a line of dharma teaching, exemplified by the Patriarch McIlroy&rsquo;s
mantra ‘Do one thing well’, which emphasizes that software partakes of the Unix
way when it has simple and consistent behavior, with properties that can be
readily modeled by the mind of the user and used by other programs”.

“But there is another line of dharma teaching, exemplified by the Patriarch
Thompson&rsquo;s great mantra ‘When in doubt, use brute force’, and various sutras on
the value of getting 90% of cases right now, rather than 100% later, which
emphasizes robustness and simplicity of implementation”.

“Now tell me: which programs have the Unix nature?”

After a silence, Nubi observed:

“Master, these teachings may conflict”.

“A simple implementation is likely to lack logic for edge cases, such as
resource exhaustion, or failure to close a race window, or a timeout during an
uncompleted transaction”.

“When such edge cases occur, the behavior of the software will become irregular
and difficult. Surely this is not the Way of Unix?”

Master Foo nodded in agreement.

“On the other hand, it is well known that fancy algorithms are brittle. Further,
each attempt to cover an edge case tends to interact with both the program&rsquo;s
central algorithms and the code covering other edge cases”.

“Thus, attempts to cover all edge cases in advance, guaranteeing ‘simplicity of
description’, may in fact produce code that is overcomplicated and brittle or
which, plagued by bugs, never ships at all. Surely this is not the Way of Unix?”

Master Foo nodded in agreement.

“What, then, is the proper dharma path?” asked Nubi.

The master spoke:

“When the eagle flies, does it forget that its feet have touched the ground?
When the tiger lands upon its prey, does it forget its moment in the air? Three
pounds of VAX!”

On hearing this, Nubi was enlightened.


## Master Foo and the Methodologist

When Master Foo and his student Nubi journeyed among the sacred sites, it was
the Master&rsquo;s custom in the evenings to offer public instruction to Unix
neophytes of the towns and villages in which they stopped for the night.

On one such occasion, a methodologist was among those who gathered to listen.

“If you do not repeatedly profile your code for hot spots while tuning, you will
be like a fisherman who casts his net in an empty lake”, said Master Foo.

“Is it not, then, also true”, said the methodology consultant, “that if you do
not continually measure your productivity while managing resources, you will be
like a fisherman who casts his net in an empty lake?”

“I once came upon a fisherman who just at that moment let his net fall in the
lake on which his boat was floating”, said Master Foo. “He scrabbled around in
the bottom of his boat for quite a while looking for it”.

“But”, said the methodologist, “if he had dropped his net in the lake, why was
he looking in the boat?”

“Because he could not swim”, replied Master Foo.

Upon hearing this, the methodologist was enlightened.


## Master Foo Discourses on the Graphical User Interface

One evening, Master Foo and Nubi attended a gathering of programmers who had met
to learn from each other. One of the programmers asked Nubi to what school he
and his master belonged. Upon being told they were followers of the Great Way of
Unix, the programmer grew scornful.

“The command-line tools of Unix are crude and backward”, he scoffed. “Modern,
properly designed operating systems do everything through a graphical user
interface”.

Master Foo said nothing, but pointed at the moon. A nearby dog began to bark at
the master&rsquo;s hand.

“I don&rsquo;t understand you!” said the programmer.

Master Foo remained silent, and pointed at an image of the Buddha. Then he
pointed at a window.

“What are you trying to tell me?” asked the programmer.

Master Foo pointed at the programmer&rsquo;s head. Then he pointed at a rock.

“Why can&rsquo;t you make yourself clear?” demanded the programmer.

Master Foo frowned thoughtfully, tapped the the programmer twice on the nose,
and dropped him in a nearby trashcan.

As the programmer was attempting to extricate himself from the garbage, the dog
wandered over and piddled on him.

At that moment, the programmer achieved enlightenment.


## Master Foo and the Old Hand

An experienced Unix programmer, hearing of Master Foo&rsquo;s wisdom, came to him for
guidance. Approaching the Master, he bowed three times and said:

“Master Foo, I am gravely troubled. In my youth, those who followed the Great
Way of Unix used software that was simple and unaffected, like ed and mailx.
Today, they use vim and mutt. Tomorrow I fear they will use KMail and Evolution,
and Unix will have become like Windows — bloated and covered over with GUIs.”

Master Foo said: “But what software do you use when you want to draw a poster?”

The programmer replied: “I&#x2026;have never done that. But I am sure that I could
use LaTeX or pic to accomplish it without GUIs, in the proper Unix way.”

Master Foo then said: “Which one will reach the other side of the river: The one
who dreams of a raft, or the one that hitchhikes to the next bridge?”

Upon hearing this, the programmer was enlightened.


## Master Foo and the Shell Tools

A Unix novice came to Master Foo and said: “I am confused. Is it not the Unix
way that every program should concentrate on one thing and do it well?”

Master Foo nodded.

The novice continued: “Isn&rsquo;t it also the Unix way that the wheel should not be
reinvented?”

Master Foo nodded again.

“Why, then, are there several tools with similar capabilities in text
processing: sed, awk and Perl? With which one can I best practice the Unix way?”

Master Foo asked the novice: “If you have a text file, what tool would you use
to produce a copy with a few words in it replaced by strings of your choosing?”

The novice frowned and said: “Perl&rsquo;s regexps would be excessive for so simple a
task. I do not know awk, and I have been writing sed scripts in the last few
weeks. As I have some experience with sed, at the moment I would prefer it. But
if the job only needed to be done once rather than repeatedly, a text editor
would suffice.”

Master Foo nodded and replied: “When you are hungry, eat; when you are thirsty,
drink; when you are tired, sleep.”

Upon hearing this, the novice was enlightened.


## Master Foo and the Nervous Novice

There was a novice who learned much at the Master&rsquo;s feet, but felt something to
be missing. After meditating on his doubts for some time, he found the courage
to approach Master Foo about his problem.

“Master Foo,” he asked “why do Unix users not employ antivirus programs? And
defragmentors? And malware cleaners?”

Master Foo smiled, and said “When your house is well constructed, there is no
need to add pillars to keep the roof in place.”

The novice replied “Would it not be better to use these things anyway, just to
be certain?”

Master Foo reached for a nearby ball of string, and began wrapping it around the
novice&rsquo;s feet.

“What are you doing?” the novice asked in surprise.

Master Foo replied simply: “Tying your shoes.”

Upon hearing this, the novice was enlightened.


## Master Foo and the Recruiter

A technical recruiter, having discovered that that the ways of Unix hackers were
strange to him, sought an audience with Master Foo to learn more about the Way.
Master Foo met the recruiter in the HR offices of a large firm.

The recruiter said, “I have observed that Unix hackers scowl or become annoyed
when I ask them how many years of experience they have in a new programming
language. Why is this so?”

Master Foo stood, and began to pace across the office floor. The recruiter was
puzzled, and asked “What are you doing?”

“I am learning to walk,” replied Master Foo.

“I saw you walk through that door” the recruiter exclaimed, “and you are not
stumbling over your own feet. Obviously you already know how to walk.”

“Yes, but this floor is new to me.” replied Master Foo.

Upon hearing this, the recruiter was enlightened.


## Master Foo Discourses on Returning to Windows

A student said: “We have learned that Unix is not just an operating system, but
also a style of approaching problems.”

Master Foo nodded in agreement.

The student continued: “Then, the Great Way of Unix can be applied on other
operating systems?”

Master Foo sat silent for a moment, then said: “In every operating system there
is a path to the Great Way, if only we can find it.”

The student continued: “What, then, of Windows? It is preinstalled on most
computers, and though its tools are mostly far inferior, they are easy to use
for beginners. Surely, Windows users could benefit from the Unix philosophy.”

Master Foo nodded again.

The student said: “How, then, are those enlightened in the Unix Way to return to
the Windows world?”

Master Foo said: “To return to Windows, you have but to boot it up.”

The student said, growing agitated: “Master Foo, if it is so easy, why are there
so many monolithic and broken software packages for Windows? Elegant software
should also be possible with a GUI and fancy colors, but there is little
evidence that this occurs. What becomes of an enlighted one who returns to
Windows?”

Master Foo: “A broken mirror never reflects again; fallen flowers never go back
to the old branches.”

Upon hearing this, all present were enlightened.


## Master Foo and the Unix Zealot

A Unix zealot, having heard that Master Foo was wise in the Great Way, came to
him for instruction. Master Foo said to him:

“When the Patriarch Thompson invented Unix, he did not understand it. Then he
gained in understanding, and no longer invented it”.

“When the Patriarch McIlroy invented the pipe, he knew that it would transform
software, but did not know that it would transform mind”.

“When the Patriarch Ritchie invented C, he condemned programmers to a thousand
hells of buffer overruns, heap corruption, and stale-pointer bugs”.

“Truly, the Patriarchs were blind and foolish!”

The zealot was greatly angered by the Master&rsquo;s words.

“These enlightened ones”, he protested. “gave us the Great Way of Unix. Surely,
if we mock them we will lose merit and be reborn as beasts or MCSEs”.

“Is your code ever completely without stain and flaw?” demanded Master Foo.

“No”, admitted the zealot, “no man&rsquo;s is”.

“The wisdom of the Patriarchs”, said Master Foo, “was that they knew they were
fools”.

Upon hearing this, the zealot was enlightened.


## Master Foo Discourses on the Unix-Nature

A student said to Master Foo: “We are told that the firm called SCO holds true
dominion over Unix”.

Master Foo nodded.

The student continued, “Yet we are also told that the firm called OpenGroup also
holds true dominion over Unix”.

Master Foo nodded.

“How can this be?” asked the student.

Master Foo replied:

“SCO indeed has dominion over the code of Unix, but the code of Unix is not
Unix. OpenGroup indeed has dominion over the name of Unix, but the name of Unix
is not Unix”.

“What, then, is the Unix-nature?” asked the student.

Master Foo replied:

“Not code. Not name. Not mind. Not things. Always changing, yet never changing”.

“The Unix-nature is simple and empty. Because it is simple and empty, it is more
powerful than a typhoon”.

“Moving in accordance with the law of nature, it unfolds inexorably in the minds
of programmers, assimilating designs to its own nature. All software that would
compete with it must become like to it; empty, empty, profoundly empty,
perfectly void, hail!”

Upon hearing this, the student was enlightened.


## Master Foo and the MCSE

Once, a famous Windows system administrator came to Master Foo and asked him for
instruction: “I have heard that you are a powerful Unix wizard. Let us trade
secrets, that we may both gain thereby.”

Master Foo said: “It is good that you seek wisdom. But in the Way of Unix, there
are no secrets.”

The administrator looked puzzled at this. “But it is said that you are a great
Unix guru who knows all the innermost mysteries. As do I in Windows; I am an
MCSE, and I have many other certifications of knowledge not common in the world.
I know even the most obscure registry entries by heart. I can tell you
everything about the Windows API, yes, even secrets those of Redmond have
half-forgotten. What is the arcane lore that gives you your power?”

Master Foo said: “I have none. Nothing is hidden, nothing is revealed.”

Growing angry, the administrator said “Very well, if you hold no secrets, then
tell me: what do I have to know to become as powerful in the Unix way as you?”

Master Foo said: “A man who mistakes secrets for knowledge is like a man who,
seeking light, hugs a candle so closely that he smothers it and burns his hand.”

Upon hearing this, the administrator was enlightened.


## Master Foo and the End User

On another occasion when Master Foo gave public instruction, an end user, having
heard tales of the Master&rsquo;s wisdom, came to him for guidance.

He bowed three times to Master Foo. “I wish to learn the Great Way of Unix”, he
said “but the command line confuses me”.

Some of the onlooking neophytes began to mock the end user, calling him
“clueless” and saying that the Way of Unix is only for those of discipline and
intelligence.

The Master held up a hand for silence, and called the most obstreperous of the
neophytes who had mocked forward, to where he and the end user sat.

“Tell me”, he asked the neophyte, “of the code you have written and the works of
design you have uttered”.

The neophyte began to stammer out a reply, but fell silent.

Master Foo turned to the end-user. “Tell me”, he inquired, “why do you seek the
Way?”

“I am discontent with the software I see around me”, the end user replied. “It
neither performs reliably nor pleases the eye and hand. Having heard that the
Unix way, though difficult, is superior, I seek to cast aside all snares and
delusions”.

“And what do you do in the world”, asked Master Foo, “that you must strive with
software?”

“I am a builder”, the end user replied, “Many of the houses of this town were
made under my chop”.

Master Foo turned back to the neophyte. “The housecat may mock the tiger”, said
the master, “but doing so will not make his purr into a roar”.

Upon hearing this, the neophyte was enlightened.


## Master Foo and the Programming Prodigy

There was a time when rumors began to reach Master Foo and his students of a
prodigiously gifted programmer, a young man who wandered the length and breadth
of the land performing mighty feats of coding and humiliating all who dared set
their skill against his.

Eventually this prodigy came to visit Master Foo, who received him politely and
offered him tea. The Prodigy accepted with equal politeness and explained the
motive for his visit.

“I have come to you,” he said “seeking a code and design review of my latest
project. For it is of surpassing complexity, and I do not have peers capable of
understanding it. Only an acknowledged master such as yourself (and here the
Prodigy bowed deeply) can have the discernment required.”

Master Foo bowed politely in return and began examining the Prodigy&rsquo;s code.
After some time he raised his eyes from the screen. “This code is at first sight
very impressive,” he said. “It is elegant in design, utilizing original
algorithms of great ingenuity, and appears to be implemented in a craftsmanlike
way which minimizes the possibility of errors.”

The Prodigy looked very pleased at this praise, but Master Foo continued:
“However, I detect one significant flaw.”

“Flaw?” the Prodigy said. “What flaw?”

“This code is difficult to read,” said Master Foo. “It is only thinly commented,
its invariants are not specified, and I see no narrative description of its
architecture or internal data structures anywhere. These problems will seriously
impede your cooperation with other programmers.”

The Prodigy drew himself up haughtily. “I do not seek the cooperation of other
programmers,” he said. “Every time I thought I had found one who might match me
in skill I have been disappointed. Thus, I work alone.”

“But even the hacker who works alone,” said Master Foo, “collaborates with
others, and must constantly communicate clearly to them, lest his work become
confused and lost.”

“Of what others do you speak?” the Prodigy demanded.

Master Foo said: “All your future selves.”

Upon hearing this, the Prodigy was enlightened.


## Master Foo and the Hardware Designer

On one occasion, as Master Foo was traveling to a conference with a few of his
senior disciples, he was accosted by a hardware designer.

The hardware designer said: “It is rumored that you are a great programmer. How
many lines of code do you write per year?”

Master Foo replied with a question: “How many square inches of silicon do you
lay out per year?”

“Why&#x2026;we hardware designers never measure our work in that way,” the man said.

“And why not?” Master Foo inquired.

“If we did so,” the hardware designer replied, “we would be tempted to design
chips so large that they cannot be fabricated - and, if they were fabricated,
their overwhelming complexity would make it be impossible to generate proper
test vectors for them.”

Master Foo smiled, and bowed to the hardware designer.

In that moment, the hardware designer achieved enlightenment.


<a id="the-unix-power-clasic"></a>

# The Unix Power Classic

Editor&rsquo;s Note:

> This is an incomplete work. It is supposed to have 81 chapters but only has \_
> before the website went offline and these are the ones I was able to salvage
> from the wayback machine.
> 
> Usually found at [mercury.ccil.org](http://mercury.ccil.org/~cowan/upc/) by [John Cowan](http://ccil.org/~cowan)
> 
> To reach me, email at `yax<at>yaxley<dot>in`


## The Unix Power Classic: A book about the Unix Way and its power

This is [my](http://ccil.org/~cowan) evolving [hacker](http://www.catb.org/~esr/jargon/html/H/hacker.html)-oriented version of the Dao De Jing (literally &ldquo;way
power classic&rdquo;).

Disclaimer: I don&rsquo;t actually know any Chinese. I&rsquo;m working from Jonathan Star&rsquo;s
[Verbatim Translation](http://www.amazon.com/exec/obidos/ASIN/1585420999), an amazingly helpful spreadsheet in book form giving
character-by-character glosses for each of the 5000-odd characters of the Dao De
Jing. I&rsquo;m also using the online Chinese text with clickable characters at
[zhongwen.com](http://zhongwen.com/dao.htm).

Not much is known for sure about the Dao De Jing, except that it&rsquo;s Chinese, it&rsquo;s
very old, and people have loved it for twenty-five hundred years, as [Ursula K.
LeGuin](http://www.ursulakleguin.com/) says in [her version](http://www.amazon.com/exec/obidos/ASIN/1570623953), which I dearly love.

But I will say this much. The Dao De Jing can be given philosophical
interpretations, political interpretations, religious interpretations. In some
translations the original sinks under the weight of them. But it has survived
and is read today because it is, at bottom, immortal poetry, as beautiful and
meaningful as any that humanity has ever known.

Here are the 81 chapters (or the ones I&rsquo;ve written so far) in the usual order.
Book One (&ldquo;The Way&rdquo;) comprises chapters 1-37; Book Two (&ldquo;Its Power&rdquo;) comprises
chapters 38-81.

Here&rsquo;s a [tanka](http://www.americantanka.com/about.html) I wrote belonging to the same tradition:

<p class="verse">
Newbies always ask:<br />
&#xa0;&#xa0;&ldquo;Elements or attributes?<br />
&rdquo;Which will serve me best?"<br />
&#xa0;&#xa0;Those who know roar like lions;<br />
&#xa0;&#xa0;Wise hackers smile like tigers.<br />
</p>

And here&rsquo;s a nice three-liner salvaged from an email by [Len Bullard](http://lamammals.blogspot.com/):

<p class="verse">
Raised floors hide the chaos.<br />
Facades hide the boilerplate.<br />
A good designer enables upgrades.<br />
</p>

Comments and suggestions are solicited; write to [cowan@ccil.org](mailto:cowan@ccil.org).


## 01

<p class="verse">
The route you can traverse<br />
&#xa0;&#xa0;isn&rsquo;t a static route.<br />
The name you can dereference<br />
&#xa0;&#xa0;isn&rsquo;t a universal name.<br />
<br />
Namelessness is the root of everything.<br />
Names are the mother of everything.<br />
<br />
Therefore,<br />
&#xa0;&#xa0;the unchanging, seen from outside the box,<br />
&#xa0;&#xa0;&#xa0;&#xa0;reveals its inner nature;<br />
&#xa0;&#xa0;the unchanging, seen from inside the box,<br />
&#xa0;&#xa0;&#xa0;&#xa0;reveals its outer form.<br />
<br />
These two are alike in origin,<br />
&#xa0;&#xa0;but different in name.<br />
Their unity is called &ldquo;the mystery&rdquo;.<br />
<br />
Mystery of all mysteries,<br />
&#xa0;&#xa0;the gate to all wonders.<br />
<br />
[As Le Guin says, a perfect translation<br />
of this verse is perfectly impossible.]<br />
</p>


## 04

<p class="verse">
Unix is a cauldron,<br />
&#xa0;&#xa0;&#xa0;yet when it&rsquo;s in use,<br />
&#xa0;&#xa0;&#xa0;it&rsquo;s somehow never exhausted.<br />
<br />
Deep, indeed;<br />
&#xa0;&#xa0;&#xa0;it seems to be the source<br />
&#xa0;&#xa0;&#xa0;of the ten thousand apps.<br />
<br />
Rounding off its sharpness,<br />
&#xa0;&#xa0;&#xa0;resolving its confusions,<br />
&#xa0;&#xa0;&#xa0;tempering its brilliance,<br />
&#xa0;&#xa0;&#xa0;it becomes one with the mundane.<br />
<br />
Deep, indeed;<br />
&#xa0;&#xa0;&#xa0;it seems likely to endure.<br />
<br />
I do not know whose child it is;<br />
&#xa0;&#xa0;&#xa0;in imagination, it existed<br />
&#xa0;&#xa0;&#xa0;before its creators.<br />
<br />
</p>


## 07

<p class="verse">
Design is everlasting,<br />
content is enduring.<br />
<br />
What&rsquo;s the reason that design and content<br />
&#xa0;&#xa0;can be everlasting and enduring?<br />
<br />
Because they don&rsquo;t exist in themselves;<br />
&#xa0;&#xa0;thus they exist forever.<br />
<br />
For this reason, the hacker<br />
&#xa0;&#xa0;is behind himself<br />
&#xa0;&#xa0;and in front of himself.<br />
<br />
He rejects his ego and his ego is preserved.<br />
Is this not because he lacks ego?<br />
Isn&rsquo;t that why he can perfect himself?<br />
</p>


## 08

<p class="verse">
The highest Quality is like water.<br />
<br />
Water Quality benefits everything,<br />
&#xa0;&#xa0;but doesn&rsquo;t compete with them.<br />
<br />
(It flows down to everyone&rsquo;s pisshole;<br />
&#xa0;&#xa0;so it&rsquo;s very close to the Way.)<br />
<br />
A house has Quality if it&rsquo;s level,<br />
thinking has Quality if it&rsquo;s deep,<br />
relationships have Quality if they&rsquo;re decent,<br />
speaking has Quality if it&rsquo;s sincere,<br />
management has Quality if it&rsquo;s just,<br />
work has Quality if it&rsquo;s competent,<br />
action has Quality if it&rsquo;s timely.<br />
<br />
Above all, these things don&rsquo;t compete,<br />
and so they are faultless.<br />
</p>


## 09

<p class="verse">
Packing in more features,<br />
&#xa0;&#xa0;you&rsquo;re not likely to finish in time.<br />
Pound on sharp tools,<br />
&#xa0;&#xa0;they won&rsquo;t last long.<br />
Code full of chrome and glitz,<br />
&#xa0;&#xa0;nobody can secure that.<br />
<br />
Money, power, and ego:<br />
&#xa0;&#xa0;what follows is disaster.<br />
Finish the job and move on,<br />
&#xa0;&#xa0;that&rsquo;s the way of Unix.<br />
</p>


## 15

<p class="verse">
The hackers of the Elder Days<br />
&#xa0;&#xa0;&#xa0;cultivated mastery:<br />
&#xa0;&#xa0;&#xa0;the subtle essence,<br />
&#xa0;&#xa0;&#xa0;deep, penetrating, profound, hairy.<br />
<br />
And so we cannot understand them.<br />
<br />
As a best effort, therefore,<br />
&#xa0;&#xa0;I wil describe their appearance:<br />
<br />
They were cautious as the elephant,<br />
&#xa0;&#xa0;like one making global changes to a codebase.<br />
<br />
They were vigilant as the monkey,<br />
&#xa0;&#xa0;yes, like a rogue(6) player fearing danger from all quarters.<br />
<br />
They were courteous,<br />
&#xa0;&#xa0;like ITS turists.<br />
<br />
They were egoless, yes,<br />
&#xa0;&#xa0;like ice which is just about to crack.<br />
<br />
They were solid, yes, like GNU utilities.<br />
<br />
They were open, yes, like a newly formatted disk.<br />
<br />
They were opaque, like spaghetti code.<br />
<br />
Who can make spaghetti code straightforward?<br />
&#xa0;&#xa0;It gradually clarifies itself.<br />
<br />
Who can make dead code useful again?<br />
&#xa0;&#xa0;It gradually rejuvenates itself.<br />
<br />
Holding to the Unix Way,<br />
&#xa0;&#xa0;one doesn&rsquo;t long<br />
&#xa0;&#xa0;for more and more features.<br />
<br />
Truly, therefore, one is compact,<br />
&#xa0;&#xa0;and can remain stable<br />
&#xa0;&#xa0;without gratuitous changes.<br />
<br />
[Credit: sbp suggested some improvements]<br />
</p>


## 17

<p class="verse">
The greatest project leaders<br />
&#xa0;&#xa0;&#xa0;hardly make their presence known.<br />
<br />
Next best are those<br />
&#xa0;&#xa0;&#xa0;who are loved and honored.<br />
<br />
Next come those who are feared.<br />
<br />
Next the PHBs, who are despised.<br />
<br />
The demand to be trusted is not enough;<br />
&#xa0;&#xa0;indeed, it finds no trust.<br />
<br />
The true leader shuts up and shows us the code.<br />
<br />
Then when the tasks are accomplished,<br />
&#xa0;&#xa0;&#xa0;and the project is complete,<br />
&#xa0;&#xa0;&#xa0;all the contributors say,<br />
&#xa0;&#xa0;&#xa0;&ldquo;We did it ourselves.&rdquo;<br />
</p>


## 18

<p class="verse">
When the way of Unix is forgotten,<br />
&#xa0;&#xa0;&#xa0;&ldquo;team players&rdquo; and &ldquo;professionalism&rdquo; appear.<br />
When ego and cleverness dominate,<br />
&#xa0;&#xa0;&#xa0;the codebase becomes a pile of cruft.<br />
When the team has not jelled,<br />
&#xa0;&#xa0;&#xa0;&ldquo;vision statements&rdquo; and &ldquo;objective-setting&rdquo; are all we hear of.<br />
When the startup is heading for the rocks,<br />
&#xa0;&#xa0;&#xa0;the talk is of &ldquo;company loyalty&rdquo; and &ldquo;management by exception&rdquo;.<br />
<br />
[Credit: esr provided an early version.]<br />
</p>


## 21

<p class="verse">
Power&rsquo;s nature is to be great<br />
&#xa0;&#xa0;iff it follows the Way.<br />
The Way is the real thing<br />
&#xa0;&#xa0;iff it is waxing,<br />
&#xa0;&#xa0;iff it is waning.<br />
<br />
Waxing, oh!<br />
Waning, oh!<br />
&#xa0;&#xa0;Its kernel holds the classes.<br />
Waning, oh!<br />
Waxing, oh!<br />
&#xa0;&#xa0;Its kernel holds the objects.<br />
Profound, oh!<br />
Obscure, oh!<br />
&#xa0;&#xa0;Its kernel holds the essence.<br />
<br />
This essence is very real;<br />
&#xa0;&#xa0;its kernel holds the truth.<br />
<br />
From now back to the Elder Days,<br />
&#xa0;&#xa0;its name has never been lost.<br />
<br />
Thus it tracks the common source.<br />
How do I grok the common source?<br />
By this.<br />
<br />
[Credit: sbp pointed out the lunar imagery.]<br />
</p>


## 23

<p class="verse">
A few words about the matter:<br />
<br />
Flames don&rsquo;t outlast the message,<br />
Flamewars don&rsquo;t outlast the thread.<br />
What are the causes of these?<br />
&#xa0;&#xa0;The total system.<br />
<br />
If the works of the total system<br />
&#xa0;&#xa0;&#xa0;can&rsquo;t last forever,<br />
how much less can anyone else&rsquo;s, in fact?<br />
<br />
So do business with Unix people.<br />
<br />
Unix people are one with Unix,<br />
Power people are one with Power,<br />
(Lusers are one with Lossage.)<br />
<br />
Being one with Unix people,<br />
&#xa0;&#xa0;Unix must be happy with them.<br />
Power too is happy with them.<br />
(Even being one with lusers counts.)<br />
<br />
Trusting&rsquo;s not enough, in fact;<br />
Having&rsquo;s not trusting, either.<br />
</p>


## 28

<p class="verse">
Knowing its rigor,<br />
&#xa0;&#xa0;&#xa0;holding on to its flexibility,<br />
&#xa0;&#xa0;&#xa0;the system becomes a river.<br />
<br />
When the system becomes a river,<br />
&#xa0;&#xa0;&#xa0;stable power will not be lost<br />
&#xa0;&#xa0;&#xa0;when looping back to the design stage.<br />
<br />
Knowing its clarity,<br />
&#xa0;&#xa0;&#xa0;holding on to its profundity,<br />
&#xa0;&#xa0;&#xa0;the system becomes a pattern.<br />
<br />
Stable power will not go astray<br />
&#xa0;&#xa0;&#xa0;when jumping forward to the extreme.<br />
<br />
Knowing its pride,<br />
&#xa0;&#xa0;&#xa0;holding on to its humility,<br />
&#xa0;&#xa0;&#xa0;the system becomes a valley.<br />
<br />
When the system becomes a valley,<br />
&#xa0;&#xa0;&#xa0;stable power will return to the unwritten code.<br />
<br />
When the unwritten code is shattered,<br />
&#xa0;&#xa0;&#xa0;it becomes the utilities.<br />
<br />
When the hacker makes use of them,<br />
&#xa0;&#xa0;&#xa0;then the team leaders last long.<br />
<br />
Thus the great carving does not divide.<br />
</p>


## 34

<p class="verse">
Unix is pervasive!<br />
&#xa0;&#xa0;It runs on any platform.<br />
<br />
The ten thousand apps rely on it;<br />
&#xa0;&#xa0;it gives them life,<br />
&#xa0;&#xa0;but doesn&rsquo;t dominate them.<br />
<br />
When the job is done,<br />
&#xa0;&#xa0;&#xa0;Unix doesn&rsquo;t take credit for it.<br />
<br />
It supports the ten thousand apps,<br />
&#xa0;&#xa0;&#xa0;but doesn&rsquo;t claim to own them.<br />
<br />
Free of imposed paradigms,<br />
&#xa0;&#xa0;&#xa0;it can be called &ldquo;the flexible&rdquo;.<br />
<br />
The ten thousand apps run on it,<br />
&#xa0;&#xa0;&#xa0;but don&rsquo;t control it,<br />
&#xa0;&#xa0;&#xa0;so it can be named &ldquo;the powerful&rdquo;.<br />
<br />
Because it never dominates,<br />
&#xa0;&#xa0;&#xa0;it can achieve dominance.<br />
</p>


## 39

<p class="verse">
Design power was one, thus clear.<br />
Coding power was one, thus calm.<br />
Testing power was one, thus energized.<br />
Refactoring power was one, thus fulfilled.<br />
Contributor power was one, thus alive.<br />
Leader power was one, thus world-dominating.<br />
<br />
What made it so?<br />
<br />
Without design, the clear would be afraid and split open.<br />
Without coding, the calm would be afraid and shake to pieces.<br />
Without testing, the energized would be afraid and wither away.<br />
Without refactoring, the fulfilled would be afraid and be exhausted.<br />
Without contributors, life would be afraid and perish.<br />
Without leaders, trust and merit would be afraid and stumble.<br />
<br />
For trust, humility is the root.<br />
For merit, humility is the base class.<br />
<br />
The Old Hackers called themselves<br />
&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;nerds<br />
&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;dweebs<br />
&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;geeks<br />
because humility is the root.<br />
<br />
Having the most bells and whistles<br />
&#xa0;&#xa0;doesn&rsquo;t make a project the best.<br />
<br />
Not &ldquo;clink clink&rdquo; like jewels,<br />
&#xa0;&#xa0;but &ldquo;WHAM WHAM&rdquo; like boulders.<br />
</p>


## 40

<p class="verse">
Reversal is the movement of Unix;<br />
Ease is the function of Unix.<br />
<br />
The system with its ten thousand apps<br />
&#xa0;&#xa0;grow out of what&rsquo;s there;<br />
What&rsquo;s there grows out of what isn&rsquo;t.<br />
</p>


## 41

<p class="verse">
Thoughtful hackers hear about Unix<br />
&#xa0;&#xa0;&#xa0;and try to use it.<br />
Ordinary hackers hear about Unix<br />
&#xa0;&#xa0;&#xa0;and mess about with it a little.<br />
Thoughtless hackers hear about Unix<br />
&#xa0;&#xa0;&#xa0;and crack wise about it.<br />
It wouldn&rsquo;t be Unix<br />
&#xa0;&#xa0;&#xa0;if there weren&rsquo;t wisecracks about it.<br />
<br />
So we establish the following rules:<br />
<br />
The most brilliant Unix seems the most obscure.<br />
Advanced Unix seems like retrocomputing.<br />
The most powerful code seems like just loops and conditionals.<br />
The clearest code seems to be opaque.<br />
The sharpest tools seem inadequate.<br />
Solid code seems flaky.<br />
Stable code seems to change.<br />
<br />
Great methodologies don&rsquo;t have boundaries.<br />
Great talent doesn&rsquo;t code fast.<br />
Great music makes no sound.<br />
The ideal elephant has no shape.<br />
The Unix Way has no name.<br />
<br />
Yet for just this reason<br />
&#xa0;&#xa0;&#xa0;it brings things to perfection.<br />
</p>


## 42

<p class="verse">
Unix begat the kernel;<br />
the kernel begat the libraries;<br />
the libraries begat the utilities;<br />
the utilities begat the ten thousand apps.<br />
<br />
The ten thousand apps<br />
&#xa0;&#xa0;carry semantics on their backs,<br />
&#xa0;&#xa0;and syntax on their fronts.<br />
<br />
This combination makes harmony.<br />
<br />
People detest geeks, nerds, and dweebs,<br />
and yet hackers and wizards use these titles.<br />
<br />
Thus, perhaps, things lose but something wins.<br />
<br />
What others say, I say too:<br />
&#xa0;&#xa0;Tyrants and flamers don&rsquo;t die natural deaths.<br />
&#xa0;&#xa0;I make this the foundation of my doctrine.<br />
</p>


## 43

<p class="verse">
The system&rsquo;s most flexible parts<br />
&#xa0;&#xa0;gallop on horseback<br />
&#xa0;&#xa0;&#xa0;&#xa0;past the most stable parts.<br />
<br />
What isn&rsquo;t there<br />
&#xa0;&#xa0;penetrates<br />
&#xa0;&#xa0;&#xa0;&#xa0;what has no crevices.<br />
<br />
From this I know<br />
&#xa0;&#xa0;the benefits<br />
&#xa0;&#xa0;&#xa0;&#xa0;of Laziness.<br />
<br />
Its teachings are wordless.<br />
<br />
The benefits of Laziness<br />
&#xa0;&#xa0;are rarely attained<br />
&#xa0;&#xa0;&#xa0;&#xa0;in this world.<br />
<br />
[For more on Laziness, see <http://c2.com/cgi/wiki?LazinessImpatienceHubris> ]<br />
</p>


## 48

<p class="verse">
Seek knowledge every day,<br />
&#xa0;&#xa0;you win.<br />
Seek the Way every day,<br />
&#xa0;&#xa0;you lose.<br />
Lose and lose again,<br />
&#xa0;&#xa0;until you reach hacklessness.<br />
When you&rsquo;re hackless,<br />
&#xa0;&#xa0;nothing is left unhacked.<br />
<br />
World domination<br />
&#xa0;&#xa0;is always achieved egolessly.<br />
When you&rsquo;re ego-driven,<br />
&#xa0;&#xa0;you&rsquo;re never able to dominate the world.<br />
<br />
</p>


## 53

<p class="verse">
If I had even a scrap of savvy,<br />
&#xa0;&#xa0;I&rsquo;d follow the main Way.<br />
<br />
The main Way is very easy,<br />
&#xa0;&#xa0;but others prefer the side roads:<br />
<br />
Corporate headquarters<br />
&#xa0;&#xa0;is arranged immaculately,<br />
&#xa0;&#xa0;&#xa0;&#xa0;but the codebase is a mess,<br />
&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;the cubicles are bare.<br />
<br />
Dressed in their elegant suits,<br />
at their side their clever lawyers,<br />
gorging on food and drink:<br />
&#xa0;&#xa0;this is called &ldquo;robbery and vanity&rdquo;.<br />
<br />
Not the eunuch&rsquo;s way,<br />
&#xa0;&#xa0;but the Unix way,<br />
&#xa0;&#xa0;no less!<br />
</p>


## 57

<p class="verse">
Use justice to run a project.<br />
Use surprise to run a company.<br />
Use non-interference to achieve world domination.<br />
By what do I know this is so, indeed?<br />
<br />
By this:<br />
<br />
When the world is full of<br />
&#xa0;&#xa0;restrictions and prohibitions,<br />
&#xa0;&#xa0;the people grow poorer.<br />
<br />
When the companies have<br />
&#xa0;&#xa0;many fast-talking lawyers,<br />
&#xa0;&#xa0;the world grows more and more troubled.<br />
<br />
When the geeks abound in<br />
&#xa0;&#xa0;clever techniques,<br />
&#xa0;&#xa0;abnormal things more and more occur.<br />
<br />
When law and order becomes<br />
&#xa0;&#xa0;more and more evident,<br />
&#xa0;&#xa0;more robbers and thieves appear.<br />
<br />
So the hacker says:<br />
<br />
I do without doing,<br />
&#xa0;&#xa0;and the people spontaneously transform themselves.<br />
<br />
I prefer quiet,<br />
&#xa0;&#xa0;and the people are spontaneously fair.<br />
<br />
I don&rsquo;t interfere,<br />
&#xa0;&#xa0;and the people are spontaneously wealthy.<br />
<br />
I am not greedy,<br />
&#xa0;&#xa0;and the people are spontaneously honest.<br />
</p>


## 60

<p class="verse">
Run a big project like you fry a small fish.<br />
<br />
By using the Unix Way<br />
&#xa0;&#xa0;to control the project,<br />
&#xa0;&#xa0;its bugs will lose their power.<br />
<br />
Not only will bugs lose their power,<br />
&#xa0;&#xa0;but their power can no longer harm the users.<br />
<br />
Not only can their power no longer harm the users,<br />
&#xa0;&#xa0;but the geeks can no longer harm the users either:<br />
&#xa0;&#xa0;truly, neither of the two can do harm.<br />
<br />
Thus unified power is restored.<br />
</p>


## 63

<p class="verse">
Design without designing,<br />
implement without implementing,<br />
debug without debugging.<br />
<br />
The great lessens (and the small grows);<br />
the many become few (and the few become many).<br />
<br />
Respond to ill-treatment<br />
&#xa0;&#xa0;with the Power of the Unix Way.<br />
<br />
Tackle difficult projects while they&rsquo;re easy;<br />
manage big projects while they&rsquo;re small.<br />
<br />
In this world,<br />
&#xa0;&#xa0;difficult problems surely arise<br />
&#xa0;&#xa0;from what is easy;<br />
in this world,<br />
&#xa0;&#xa0;big systems surely begin<br />
&#xa0;&#xa0;in what is small.<br />
<br />
Thus the hacker doesn&rsquo;t set big goals,<br />
&#xa0;&#xa0;but can accomplish big results.<br />
&#xa0;&#xa0;(Truly, frivolous promises lack sincerity.)<br />
<br />
What&rsquo;s too easy surely has many difficulties.<br />
<br />
Thus the hacker takes difficulties seriously,<br />
&#xa0;&#xa0;and ultimately has no difficulties, indeed.<br />
</p>


## 65

<p class="verse">
The ancient hackers<br />
&#xa0;&#xa0;who skillfully followed the Way<br />
&#xa0;&#xa0;didn&rsquo;t try to geekify the users,<br />
&#xa0;&#xa0;but to make things simple for them.<br />
<br />
Users are difficult to guide<br />
&#xa0;&#xa0;when they are too geeky.<br />
<br />
Using geekiness to guide a community<br />
&#xa0;&#xa0;is the community&rsquo;s ruin;<br />
using simplicity to guide a community<br />
&#xa0;&#xa0;is the community&rsquo;s blessing.<br />
<br />
Knowing these two things<br />
&#xa0;&#xa0;is knowing the basic pattern.<br />
<br />
Always knowing the basic pattern,<br />
&#xa0;&#xa0;this is called &ldquo;primal power&rdquo;.<br />
<br />
Primal power is deep, indeed!<br />
&#xa0;&#xa0;distant, indeed!<br />
<br />
Sharing things, they return:<br />
&#xa0;&#xa0;this is the great harmony.<br />
</p>


## 67

<p class="verse">
Everybody says that my Great Way seems worthless.<br />
In fact, it&rsquo;s only great **because** it seems worthless.<br />
If it **were** worthless, it would have disappeared long ago!<br />
<br />
I have three treasures: preserve and protect them.<br />
&#xa0;&#xa0;The first is called &ldquo;love&rdquo;,<br />
&#xa0;&#xa0;the second is called &ldquo;moderation&rdquo;,<br />
&#xa0;&#xa0;the third is called &ldquo;not daring to have invented it all first&rdquo;.<br />
<br />
Love, I say, can be brave;<br />
moderation, I say, can be generous;<br />
not daring to have invented it all first<br />
&#xa0;&#xa0;can develop high-quality tools.<br />
<br />
Nowadays people discard love and courage,<br />
&#xa0;&#xa0;discard moderation and generosity,<br />
&#xa0;&#xa0;discard following and leading &#x2013;<br />
&#xa0;&#xa0;&#xa0;&#xa0;that way lies death, indeed.<br />
<br />
With love, truly:<br />
&#xa0;&#xa0;struggle brings success,<br />
&#xa0;&#xa0;defense brings endurance.<br />
<br />
Heaven helps those who use love,<br />
&#xa0;&#xa0;guards them.<br />
</p>


## 68

<p class="verse">
Skillful leaders aren&rsquo;t bossy.<br />
Skillful geeks don&rsquo;t get angry.<br />
Skillful debaters don&rsquo;t join issue.<br />
Skillful managers put themselves below their developers.<br />
<br />
This is called &ldquo;the power of not pushing it&rdquo;;<br />
&#xa0;&#xa0;this is called &ldquo;using people&rsquo;s strengths&rdquo;;<br />
&#xa0;&#xa0;this is called &ldquo;matching the perfection of the sky&rdquo;.<br />
</p>


## 71

<p class="verse">
From knowing to not-knowing,<br />
&#xa0;&#xa0;that is best.<br />
<br />
From not-knowing to knowing,<br />
&#xa0;&#xa0;that&rsquo;s a bug.<br />
<br />
Truly, only the very buggy<br />
&#xa0;&#xa0;is in this way not a bug.<br />
<br />
Hackers aren&rsquo;t buggy<br />
&#xa0;&#xa0;because they are very buggy<br />
&#xa0;&#xa0;and therefore not buggy.<br />
</p>


## 72

<p class="verse">
When people don&rsquo;t fear threats,<br />
&#xa0;&#xa0;then the great FUD arrives.<br />
<br />
Don&rsquo;t restrict the user&rsquo;s space;<br />
don&rsquo;t burden the user&rsquo;s space.<br />
<br />
Truly,<br />
&#xa0;&#xa0;when you are not excessively annoying,<br />
&#xa0;&#xa0;you are not easily annoyed.<br />
<br />
Truly the hacker<br />
&#xa0;&#xa0;loves himself but doesn&rsquo;t see himself,<br />
&#xa0;&#xa0;takes care of himself but doesn&rsquo;t exalt himself.<br />
<br />
Therefore he discards that and chooses this.<br />
</p>


## 79

<p class="verse">
Reconcile a great flamewar,<br />
&#xa0;&#xa0;there will be residual grudges.<br />
&#xa0;&#xa0;How can this be made better?<br />
<br />
The geek who licenses unilaterally,<br />
&#xa0;&#xa0;and doesn&rsquo;t make demands on others,<br />
&#xa0;&#xa0;has the power to insist on his claims.<br />
<br />
The Unix Way plays no favorites,<br />
&#xa0;&#xa0;but is always on the side of the good people.<br />
</p>


## 81

<p class="verse">
Useful features aren&rsquo;t glitzy,<br />
glitzy features aren&rsquo;t useful.<br />
<br />
True hackers aren&rsquo;t flamers;<br />
flamers aren&rsquo;t true hackers.<br />
<br />
Programmers aren&rsquo;t language lawyers;<br />
language lawyers aren&rsquo;t programmers.<br />
<br />
Hackers aren&rsquo;t software hoarders:<br />
&#xa0;&#xa0;&#xa0;&#xa0;the more they do for others,<br />
&#xa0;&#xa0;the more they have for themselves;<br />
&#xa0;&#xa0;the more they give to others,<br />
&#xa0;&#xa0;&#xa0;&#xa0;the more they keep for themselves.<br />
<br />
The way of Unix is sharp,<br />
&#xa0;&#xa0;but doesn&rsquo;t injure;<br />
the hacker&rsquo;s way is to serve<br />
&#xa0;&#xa0;and not to strive.<br />
</p>


<a id="ai-koans"></a>

# AI Koans


<a id="logintaka"></a>

# LoginTaka


<a id="tales-of-zen-master-greg"></a>

# Tales of Zen Master Greg


<a id="the-tao-of-programming"></a>

# The Tao of Programming

Editor&rsquo;s Note:

> Usually found at: [canonical.org](http://www.canonical.org/~kragen/tao-of-programming.html) by [Kragen Javier Sitaker](http://canonical.org/~kragen/)

Translated by Geoffrey James

Transcribed by Duke Hillard

Transmitted by Anupam Trivedi, Sajitha Tampi, and Meghshyam Jagannath

Last substantive modification <span class="timestamp-wrapper"><span class="timestamp">&lt;1996-04-10 Wed&gt; </span></span> or earlier; [Kragen](http://canonical.org/~kragen/) link updated
<span class="timestamp-wrapper"><span class="timestamp">&lt;2016-11-30 Wed&gt;</span></span>


## Book 1 &#x2013; The Silent Void

---

Thus spake the master programmer:

> &ldquo;When you have learned to snatch the error code from the trap frame, it will be
> time for you to leave.&rdquo;

---

Something mysterious is formed, born in the silent void. Waiting alone and
unmoving, it is at once still and yet in constant motion. It is the source of
all programs. I do not know its name, so I will call it the Tao of Programming.

If the Tao is great, then the operating system is great. If the operating system
is great, then the compiler is great. If the compiler is great, then the
application is great. The user is pleased and there exists harmony in the world.

The Tao of Programming flows far away and returns on the wind of morning.

---

The Tao gave birth to machine language. Machine language gave birth to the
assembler.

The assembler gave birth to the compiler. Now there are ten thousand languages.

Each language has its purpose, however humble. Each language expresses the Yin
and Yang of software. Each language has its place within the Tao.

But do not program in COBOL if you can avoid it.

---

In the beginning was the Tao. The Tao gave birth to Space and Time. Therefore
Space and Time are Yin and Yang of programming.

Programmers that do not comprehend the Tao are always running out of time and
space for their programs. Programmers that comprehend the Tao always have enough
time and space to accomplish their goals.

How could it be otherwise?

---

The wise programmer is told about Tao and follows it. The average programmer is
told about Tao and searches for it. The foolish programmer is told about Tao
and laughs at it.

If it were not for laughter, there would be no Tao.

<p class="verse">
The highest sounds are hardest to hear.<br />
Going forward is a way to retreat.<br />
Great talent shows itself late in life.<br />
Even a perfect program still has bugs.<br />
</p>

---


## Book 2 &#x2013; The Ancient Masters

Thus spake the master programmer:

> &ldquo;After three days without programming, life becomes meaningless.&rdquo;

---

The programmers of old were mysterious and profound. We cannot fathom their thoughts, so all we do is describe their appearance.

Aware, like a fox crossing the water. Alert, like a general on the battlefield. Kind, like a hostess greeting her guests. Simple, like uncarved blocks of wood. Opaque, like black pools in darkened caves.

Who can tell the secrets of their hearts and minds?

The answer exists only in Tao.

---

Grand Master Turing once dreamed that he was a machine. When he awoke he
exclaimed:

> I don&rsquo;t know whether I am Turing dreaming that I am a machine, or a machine
> dreaming that I am Turing!

---

A programmer from a very large computer company went to a software conference
and then returned to report to his manager, saying: &ldquo;What sort of programmers
work for other companies? They behaved badly and were unconcerned with
appearances. Their hair was long and unkempt and their clothes were wrinkled
and old. They crashed our hospitality suite and they made rude noises during
my presentation.&rdquo;

The manager said: "I should have never sent you to the conference. Those
programmers live beyond the physical world. They consider life absurd, an
accidental coincidence. They come and go without knowing limitations. Without a
care, they live only for their programs. Why should they bother with social
conventions?

> &ldquo;They are alive within the Tao.&rdquo;

---

A novice asked the Master: &ldquo;Here is a programmer that never designs, documents
or tests his programs. Yet all who know him consider him one of the best
programmers in the world. Why is this?&rdquo;

The Master replies: &ldquo;That programmer has mastered the Tao. He has gone beyond
the need for design; he does not become angry when the system crashes, but
accepts the universe without concern. He has gone beyond the need for
documentation; he no longer cares if anyone else sees his code. He has gone
beyond the need for testing; each of his programs are perfect within themselves,
serene and elegant, their purpose self-evident. Truly, he has entered the
mystery of Tao.&rdquo;

---


## Book 3 &#x2013; Design

Thus spake the master programmer:

> &ldquo;When the program is being tested, it is too late to make design changes.&rdquo;

---

There once was a man who went to a computer trade show. Each day as he entered,
the man told the guard at the door:

> &ldquo;I am a great thief, renowned for my feats of shoplifting. Be forewarned, for
> this trade show shall not escape unplundered.&rdquo;

This speech disturbed the guard greatly, because there were millions of dollars
of computer equipment inside, so he watched the man carefully. But the man
merely wandered from booth to booth, humming quietly to himself.

When the man left, the guard took him aside and searched his clothes, but
nothing was to be found.

On the next day of the trade show, the man returned and chided the guard saying:
&ldquo;I escaped with a vast booty yesterday, but today will be even better.&rdquo; So the
guard watched him ever more closely, but to no avail.

On the final day of the trade show, the guard could restrain his curiosity no
longer. &ldquo;Sir Thief,&rdquo; he said, &ldquo;I am so perplexed, I cannot live in peace. Please
enlighten me. What is it that you are stealing?&rdquo;

The man smiled. &ldquo;I am stealing ideas,&rdquo; he said.

---

There once was a master programmer who wrote unstructured programs. A novice
programmer, seeking to imitate him, also began to write unstructured programs.
When the novice asked the master to evaluate his progress, the master criticized
him for writing unstructured programs, saying, &ldquo;What is appropriate for the
master is not appropriate for the novice. You must understand the Tao before
transcending structure.&rdquo;

---

There was once a programmer who was attached to the court of the warlord of Wu.
The warlord asked the programmer: &ldquo;Which is easier to design: an accounting
package or an operating system?&rdquo;

&ldquo;An operating system,&rdquo; replied the programmer.

The warlord uttered an exclamation of disbelief. &ldquo;Surely an accounting package
is trivial next to the complexity of an operating system,&rdquo; he said.

&ldquo;Not so,&rdquo; said the programmer, &ldquo;when designing an accounting package, the
programmer operates as a mediator between people having different ideas: how it
must operate, how its reports must appear, and how it must conform to the tax
laws. By contrast, an operating system is not limited by outside appearances.
When designing an operating system, the programmer seeks the simplest harmony
between machine and ideas. This is why an operating system is easier to design.&rdquo;

The warlord of Wu nodded and smiled. &ldquo;That is all good and well, but which is
easier to debug?&rdquo;

The programmer made no reply.

---

A manager went to the master programmer and showed him the requirements
document for a new application. The manager asked the master: &ldquo;How long will it
take to design this system if I assign five programmers to it?&rdquo;

&ldquo;It will take one year,&rdquo; said the master promptly.

&ldquo;But we need this system immediately or even sooner! How long will it take if I
assign ten programmers to it?&rdquo;

The master programmer frowned. &ldquo;In that case, it will take two years.&rdquo;

&ldquo;And what if I assign a hundred programmers to it?&rdquo;

The master programmer shrugged. &ldquo;Then the design will never be completed,&rdquo; he
said.

---


## Book 4 &#x2013; Coding

Thus spake the master programmer:

> &ldquo;A well-written program is its own heaven; a poorly-written program is its own hell.&rdquo;

---

A program should be light and agile, its subroutines connected like a string of
pearls. The spirit and intent of the program should be retained throughout.
There should be neither too little or too much, neither needless loops nor
useless variables, neither lack of structure nor overwhelming rigidity.

A program should follow the &ldquo;Law of Least Astonishment&rdquo;. What is this law? It is
simply that the program should always respond to the user in the way that
astonishes him least.

A program, no matter how complex, should act as a single unit. The program
should be directed by the logic within rather than by outward appearances.

If the program fails in these requirements, it will be in a state of disorder
and confusion. The only way to correct this is to rewrite the program.

---

A novice asked the master: &ldquo;I have a program that sometime runs and sometimes
aborts. I have followed the rules of programming, yet I am totally baffled.
What is the reason for this?&rdquo;

The master replied: "You are confused because you do not understand Tao. Only a
fool expects rational behavior from his fellow humans. Why do you expect it from
a machine that humans have constructed? Computers simulate determinism; only Tao
is perfect.

&ldquo;The rules of programming are transitory; only Tao is eternal. Therefore you
must contemplate Tao before you receive enlightenment.&rdquo;

&ldquo;But how will I know when I have received enlightenment?&rdquo; asked the novice.

&ldquo;Your program will then run correctly,&rdquo; replied the master.

---

A master was explaining the nature of Tao of to one of his novices. &ldquo;The Tao is
embodied in all software - regardless of how insignificant,&rdquo; said the master.

&ldquo;Is the Tao in a hand-held calculator?&rdquo; asked the novice.

&ldquo;It is,&rdquo; came the reply.

&ldquo;Is the Tao in a video game?&rdquo; continued the novice.

&ldquo;It is even in a video game,&rdquo; said the master.

&ldquo;And is the Tao in the DOS for a personal computer?&rdquo;

The master coughed and shifted his position slightly. &ldquo;The lesson is over for
today,&rdquo; he said.

---

Prince Wang"s programmer was coding software. His fingers danced upon the
keyboard. The program compiled without an error message, and the program ran
like a gentle wind.

&ldquo;Excellent!&rdquo; the Prince exclaimed, &ldquo;Your technique is faultless!&rdquo;

&ldquo;Technique?&rdquo; said the programmer turning from his terminal, &ldquo;What I follow is
Tao - beyond all techniques! When I first began to program I would see before me
the whole problem in one mass. After three years I no longer saw this mass.
Instead, I used subroutines. But now I see nothing. My whole being exists in a
formless void. My senses are idle. My spirit, free to work without plan, follows
its own instinct. In short, my program writes itself. True, sometimes there are
difficult problems. I see them coming, I slow down, I watch silently. Then I
change a single line of code and the difficulties vanish like puffs of idle
smoke. I then compile the program. I sit still and let the joy of the work fill
my being. I close my eyes for a moment and then log off.&rdquo;

Prince Wang said, &ldquo;Would that all of my programmers were as wise!&rdquo;

---


## Book 5 &#x2013; Maintenance

Thus spake the master programmer:

    "Though a program be but three lines long, someday it will have to be maintained."

---

<p class="verse">
A well-used door needs no oil on its hinges.<br />
A swift-flowing stream does not grow stagnant.<br />
Neither sound nor thoughts can travel through a vacuum.<br />
Software rots if not used.<br />
</p>

These are great mysteries.

---

A manager asked a programmer how long it would take him to finish the program on which he was working. &ldquo;It will be finished tomorrow,&rdquo; the programmer promptly replied.

&ldquo;I think you are being unrealistic,&rdquo; said the manager, &ldquo;Truthfully, how long will it take?&rdquo;

The programmer thought for a moment. &ldquo;I have some features that I wish to add. This will take at least two weeks,&rdquo; he finally said.

&ldquo;Even that is too much to expect,&rdquo; insisted the manager, &ldquo;I will be satisfied if you simply tell me when the program is complete.&rdquo;

The programmer agreed to this.

Several years later, the manager retired. On the way to his retirement luncheon, he discovered the programmer asleep at his terminal. He had been programming all night.

---

A novice programmer was once assigned to code a simple financial package.

The novice worked furiously for many days, but when his master reviewed his
program, he discovered that it contained a screen editor, a set of generalized
graphics routines, an artificial intelligence interface, but not the slightest
mention of anything financial.

When the master asked about this, the novice became indignant. &ldquo;Don&rsquo;t be so
impatient,&rdquo; he said, &ldquo;I&rsquo;ll put in the financial stuff eventually.&rdquo;

---

<p class="verse">
Does a good farmer neglect a crop he has planted?<br />
Does a good teacher overlook even the most humble student?<br />
Does a good father allow a single child to starve?<br />
Does a good programmer refuse to maintain his code?<br />
</p>

---


## Book 6 &#x2013; Management

Thus spake the master programmer:

> &ldquo;Let the programmers be many and the managers few - then all will be productive.&rdquo;

---

When managers hold endless meetings, the programmers write games. When
accountants talk of quarterly profits, the development budget is about to be
cut. When senior scientists talk blue sky, the clouds are about to roll in.

Truly, this is not the Tao of Programming.

When managers make commitments, game programs are ignored. When accountants make
long-range plans, harmony and order are about to be restored. When senior
scientists address the problems at hand, the problems will soon be solved.

Truly, this is the Tao of Programming.

---

Why are programmers non-productive?  Because their time is wasted in meetings.

Why are programmers rebellious?  Because the management interferes too much.

Why are the programmers resigning one by one?  Because they are burnt out.

Having worked for poor management, they no longer value their jobs.

---

A manager was about to be fired, but a programmer who worked for him invented a
new program that became popular and sold well. As a result, the manager
retained his job.

The manager tried to give the programmer a bonus, but the programmer refused it,
saying, &ldquo;I wrote the program because I thought it was an interesting concept,
and thus I expect no reward.&rdquo;

The manager upon hearing this remarked, &ldquo;This programmer, though he holds a
position of small esteem, understands well the proper duty of an employee. Let
us promote him to the exalted position of management consultant!&rdquo;

But when told this, the programmer once more refused, saying, &ldquo;I exist so that I
can program. If I were promoted, I would do nothing but waste everyone&rdquo;s time.
Can I go now? I have a program that I&ldquo;m working on.&rdquo;

---

A manager went to his programmers and told them: &ldquo;As regards to your work
hours: you are going to have to come in at nine in the morning and leave at
five in the afternoon.&rdquo; At this, all of them became angry and several resigned
on the spot.

So the manager said: &ldquo;All right, in that case you may set your own working
hours, as long as you finish your projects on schedule.&rdquo; The programmers, now
satisfied, began to come in at noon and work to the wee hours of the morning.

---


## Book 7 &#x2013; Corporate Wisdom

Thus spake the master programmer:

> &ldquo;You can demonstrate a program for a corporate executive, but you can&rsquo;t make him computer literate.&rdquo;

---

A novice asked the master: &ldquo;In the east there is a great tree-structure that
men call &rdquo;Corporate Headquarters&ldquo;. It is bloated out of shape with vice
presidents and accountants. It issues a multitude of memos, each saying &rdquo;Go,
Hence!&ldquo; or &rdquo;Go, Hither!&ldquo; and nobody knows what is meant. Every year new names
are put onto the branches, but all to no avail. How can such an unnatural
entity be?&rdquo;

The master replied: &ldquo;You perceive this immense structure and are disturbed that
it has no rational purpose. Can you not take amusement from its endless
gyrations? Do you not enjoy the untroubled ease of programming beneath its
sheltering branches? Why are you bothered by its uselessness?&rdquo;

---

In the east there is a shark which is larger than all other fish. It changes
into a bird whose wings are like clouds filling the sky. When this bird moves
across the land, it brings a message from Corporate Headquarters. This message
it drops into the midst of the programmers, like a seagull making its mark upon
the beach. Then the bird mounts on the wind and, with the blue sky at its back,
returns home.

The novice programmer stares in wonder at the bird, for he understands it not.
The average programmer dreads the coming of the bird, for he fears its message.
The master programmer continues to work at his terminal, for he does not know
that the bird has come and gone.

---

The Magician of the Ivory Tower brought his latest invention for the master
programmer to examine. The magician wheeled a large black box into the master"s
office while the master waited in silence.

&ldquo;This is an integrated, distributed, general-purpose workstation,&rdquo; began the
magician, &ldquo;ergonomically designed with a proprietary operating system, sixth
generation languages, and multiple state of the art user interfaces. It took my
assistants several hundred man years to construct. Is it not amazing?&rdquo;

The master raised his eyebrows slightly. &ldquo;It is indeed amazing,&rdquo; he said.

&ldquo;Corporate Headquarters has commanded,&rdquo; continued the magician, &ldquo;that everyone
use this workstation as a platform for new programs. Do you agree to this?&rdquo;

&ldquo;Certainly,&rdquo; replied the master, &ldquo;I will have it transported to the data center
immediately!&rdquo; And the magician returned to his tower, well pleased.

Several days later, a novice wandered into the office of the master programmer
and said, &ldquo;I cannot find the listing for my new program. Do you know where it
might be?&rdquo;

&ldquo;Yes,&rdquo; replied the master, &ldquo;the listings are stacked on the platform in the data
center.&rdquo;

---

The master programmer moves from program to program without fear. No change in
management can harm him. He will not be fired, even if the project is cancelled.
Why is this? He is filled with Tao.

---


## Book 8 &#x2013; Hardware and Software

Thus spake the master programmer:

> \`\`Without the wind, the grass does not move. Without software, hardware is useless.&rsquo;&rsquo;

---

A novice asked the master: &ldquo;I perceive that one computer company is much larger
than all others. It towers above its competition like a giant among dwarfs. Any
one of its divisions could comprise an entire business. Why is this so?&rdquo;

The master replied, &ldquo;Why do you ask such foolish questions? That company is
large because it is large. If it only made hardware, nobody would buy it. If it
only made software, nobody would use it. If it only maintained systems, people
would treat it like a servant. But because it combines all of these things,
people think it one of the gods! By not seeking to strive, it conquers without
effort.&rdquo;

---

A master programmer passed a novice programmer one day. The master noted the
novice&ldquo;s preoccupation with a hand-held computer game. &rdquo;Excuse me,&ldquo; he said,
&rdquo;may I examine it?"

The novice bolted to attention and handed the device to the master. &ldquo;I see that
the device claims to have three levels of play: Easy, Medium, and Hard,&rdquo; said
the master. &ldquo;Yet every such device has another level of play, where the device
seeks not to conquer the human, nor to be conquered by the human.&rdquo;

&ldquo;Pray, great master,&rdquo; implored the novice, &ldquo;how does one find this mysterious
setting?&rdquo;

The master dropped the device to the ground and crushed it underfoot. And
suddenly the novice was enlightened.

---

There was once a programmer who worked upon microprocessors. &ldquo;Look at how well
off I am here,&rdquo; he said to a mainframe programmer who came to visit, &ldquo;I have my
own operating system and file storage device. I do not have to share my
resources with anyone. The software is self- consistent and easy-to-use. Why do
you not quit your present job and join me here?&rdquo;

The mainframe programmer then began to describe his system to his friend, saying
&ldquo;The mainframe sits like an ancient sage meditating in the midst of the data
center. Its disk drives lie end-to-end like a great ocean of machinery. The
software is as multifaceted as a diamond, and as convoluted as a primeval
jungle. The programs, each unique, move through the system like a swift-flowing
river. That is why I am happy where I am.&rdquo;

The microcomputer programmer, upon hearing this, fell silent. But the two
programmers remained friends until the end of their days.

---

Hardware met Software on the road to Changtse. Software said: &ldquo;You are Yin and
I am Yang. If we travel together we will become famous and earn vast sums of
money.&rdquo; And so the set forth together, thinking to conquer the world.

Presently they met Firmware, who was dressed in tattered rags and hobbled along
propped on a thorny stick. Firmware said to them: &ldquo;The Tao lies beyond Yin and
Yang. It is silent and still as a pool of water. It does not seek fame,
therefore nobody knows its presence. It does not seek fortune, for it is
complete within itself. It exists beyond space and time.&rdquo;

Software and Hardware, ashamed, returned to their homes.

---


## Book 9 &#x2013; Epilogue

Thus spake the master programmer:

> &ldquo;It is time for you to leave.&rdquo;

