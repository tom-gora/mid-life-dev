In the ever-evolving landscape of the digital world, the importance of data preservation cannot be overstated.
From personal memories to professional projects, safeguarding your work is crucial.
In this short entry, I'm going to recount a personal experience that shows the significance of keeping backups (for example, by using Git) in even the smallest and quickest projects.


__The Catastrophe__

![crying spidey meme](https://i.ytimg.com/vi/YOTFxWAWuTo/maxresdefault.jpg)
Picture this: I was tasked with a university assignment. The irony lies in the fact that this very blog WAS that assignment, and you can already anticipate bad things happened to it ;) but I'll get to that later.
Anyway, I went on and being a webdev student, I decided that I am going to build a simple react blog rather than using a dedicated publishing platform. There is no limit to learning in the coder's life after all. 

I had invested three nights in between school and work into the project, meticulously designing the user interface (pure css). My project directory was neatly organized into components 
and I was making good progress despite the looming deadline. The pressure was on, and I found myself working late into the night.

I focused so much on the work, that I did not think it would be good to pop a copy of the directory on a USB stick or run a quick `git init` and push things to a remote repository. I recall thinking about it but I was just so focused and I wanted to be done with it already.

Then, the unthinkable happened, but this will require a bit of context.
So I am using [Neovim](https://github.com/neovim/neovim) heavily tweaked [AstroNvim](https://astronvim.com/) distribution to be precise, as my development environment. There is one thing that it does by default and I never got around to look into mitigating it.
Should the editor's process crash, or I intentionally or accidentally kill the terminal session with an edited file open, the editor will keep a backup of work (yes, I can see how a text editor is being better at backups than I am) as files in its `state/swap` directory.
![ironic meme](https://i.kym-cdn.com/entries/icons/mobile/000/031/213/ironic.jpg). Then when I return to the file it will prompt me every time to decide what to do with the backup, restore, edit anyway, ignore etc...which is for me one of those little annoyances.
So sometimes when it just gets on my nerves I'd quickly navigate to the `swap` directory and run a quick `rm -rf *`. You can see where this is going, right? So it is like way past 1AM and I am wrapping up a completed work for the day. I forget to do a little tweak, I go back into a file and it prompts me about a backup present.
I do the tweak then I quickly tidy up before turning off the computer and going to sleep. NEVER do such things when it is late, you are tired and in a hurry. Shell autoccompletion or a habbit might help with your downfall. In a nutshell, I was in a project directory, I typed `cd` and the suggestion that came up was `.local/state/nvim/swap` so I pressed enter then barely hitting `r` I took an autoccompletion suggestion of `rm -rf *` and run `poweroff`.
I was in a project directory. The project directory does NOT have a `.local/` in it. The path should have been `cd ~/.local/state/nvim/swap`. The shell never changed the current location before I run the deletion command and... I did not notice until the next morning.
I sat to the desk and to my surprised I realized the project was gone. It took me a while to realize what happened, then to try various recovery tools, but nothing helped.  

I had to come to terms with the loss and pull my stupid self together, to rebuild the thing from a ground up.  

- Benefits? Yes, the v2 of the blog has a better structured code and had several improvements and tweaks. I learned my lesson for sure. I remeber a lot of groundwork I laid the first time and was heavily inspired by a figma file I found, so this cut down on the effort. Plus I had some screenshots and recordings I could use to pull colors from and reconstruct the UI. 
Additionally, I wrote a script that does the cleaning for me. Immune to human error, it always navigates to the right place and deletes the right content.  

 - Downsides? Everything else.


__The Vital Importance of Backups and Git__

This ordeal made me recognize the undeniable importance of backups and version control systems like Git, even for the stupidest little projects. These tools are the bedrock of professionalism in the creative industries.

Git is a version control system but for a small one-man team it can perfectly well serve as an automated  that tracks changes in your code. By committing your work regularly, you can easily roll back to previous versions if something goes awry. It's a lifesaver for collaborative projects and individual work alike.

Backups come in various forms, but they all serve one purpose: to preserve your data. Whether it's cloud-based storage or physical backups like external hard drives, they act as a safety net in case of unexpected disasters.

__Creating a Backup__

Creating a backup is not a complex task. It merely requires developing a good habit. Here's how you can get started:

- Git: Install Git on your machine and create a repository for your project. Commit your changes regularly, and don't forget to push them to a remote repository for extra security.

- Cloud Backup: Sign up for a cloud storage service like Dropbox, Google Drive, or OneDrive. Upload your project files to the cloud. These services automatically back up your data, ensuring it's safe even if your computer crashes.

- Physical Backup: Invest in an external hard drive or a USB drive. Periodically copy your project files to these devices. Store them in a secure place, separate from your computer.

In closing, the lesson I learned the hard way was invaluable. Accidents can happen, and in the creative industries, losing your work can be a devastating setback. By implementing Git for version control and maintaining backups, you're not only safeguarding your work but also adhering to professional standards.

Remember, it's the simple practices and good habits that make all the difference in a world where digital disasters can strike when you least expect them. So, be proactive, backup your work, and use Git - you'll thank yourself later.
