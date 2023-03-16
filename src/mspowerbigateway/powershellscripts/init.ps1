# User Data Logs are here:
# C:\ProgramData\Amazon\EC2Launch\log\agent.log

# First Install Powershell 7.3.1
Invoke-WebRequest -Uri https://github.com/PowerShell/PowerShell/releases/download/v7.3.1/PowerShell-7.3.1-win-x64.msi -OutFile PowerShell.msi
Start-Process msiexec.exe -ArgumentList '/i PowerShell.msi /quiet' -Wait
cd "C:\Program Files\PowerShell\7"
# $Env:PATH += ";C:\Program Files\PowerShell\7"