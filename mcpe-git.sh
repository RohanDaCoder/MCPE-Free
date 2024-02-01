#My Commit Tool.. (lol)

clear
yellow="\033[1;33m"
green="\033[0;32m"
red="\033[0;31m"
cyan="\033[0;36m"
purple="\033[0;35m"
gray='\033[0;90m'
reset='\033[0m'

cd /storage/emulated/0/MCPE-Free/

echo "${purple}Repository Auto Update"
echo "${cyan}Enter the Commit Message:${yellow}"
read commit_message
echo $gray


git add *
git commit -m "$commit_message"
git push
echo "${purple}Finished.${reset}"