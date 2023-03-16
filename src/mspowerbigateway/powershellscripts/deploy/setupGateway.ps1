# For Powershell Version 7+
# Is downloaded and triggered by the initial UserData (init.ps1)
Write-Output $PSVersionTable

Install-Module -Name DataGateway -Force

Install-Module -Name AWS.Tools.Installer -Force
Install-AWSToolsModule SecretsManager,EC2 -CleanUp -Force
# Import-Module -Name AWS.Tools.SecretsManager

# The ARN for the SPN secret is passed in as the first argument by `init.ps1`
$secretArn=$args[0]

$secret = Get-SECSecretValue -SecretId $secretArn

$ApplicationId ="85653e0d-b13b-4479-8cb8-7a647bc2949e"
$Tenant = "63a89af8-95ff-4231-8c87-f709fe8ec920";
$secretString = $secret.secretString | ConvertTo-SecureString -AsPlainText -Force
Connect-DataGatewayServiceAccount -ApplicationId $ApplicationId -ClientSecret $secretString -Tenant $Tenant

$GatewayName = "AWS_automated_gateway"
$RecoverKey = "someRecoveryKeyldakfjlksj" | ConvertTo-SecureString -AsPlainText -Force
$userIDToAddasConnection = "23109f18-4949-497a-a523-d0bfd9e2db12";

Install-DataGateway -AcceptConditions

#Configuring Gateway
$InstanceId = Get-EC2InstanceMetadata -Category InstanceId
$GatewayDetails = Add-DataGatewayCluster -Name "$($GatewayName)-$($InstanceId)" -RecoveryKey  $RecoverKey -OverwriteExistingGateway

Add-DataGatewayClusterUser -GatewayClusterId $GatewayDetails.GatewayObjectId -PrincipalObjectId $userIDToAddasConnection -AllowedDataSourceTypes $null -Role Admin
