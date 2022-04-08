Sub process1QRCodeInput()
    saveData (getInput())
End Sub

Sub process6QRCodeInput()
    saveData (getInput())
    saveData (getInput())
    saveData (getInput())
    saveData (getInput())
    saveData (getInput())
    saveData (getInput())
End Sub

Public Function getInput()
    getInput = InputBox("Scan QR Code", "Match Scouting Input")
End Function

Sub testSaveData()
    saveData ("s=nm;e=2022ncgui;l=qm;m=2;r=r1;t=4561;as=[22];at=Y;au=1;us=1;al=1;ad=1;ta=2;ss=[2,44];tu=2;tc=2;tl=2;de=OffenseYes;c=x;lsr=x;be=Y;dr=x;co=OffenseDefense;cnf=n")
End Sub

Public Function ArrayLen(arr As Variant) As Integer
    ArrayLen = UBound(arr) - LBound(arr) + 1
End Function

Sub saveData(inp As String)
    Dim fields
    Dim par
    Dim value
    Dim key
    Dim table As ListObject
    Dim ws As Worksheet
    Set ws = ActiveSheet
    Dim mapper
    Set mapper = CreateObject("Scripting.Dictionary")
    Dim data
    Set data = CreateObject("Scripting.Dictionary")
    Dim tableName As String
    tableName = "ScoutingData"

    ' Set up map
    ' Fields for every year
    mapper.Add "s", "scouter"
    mapper.Add "e", "eventCode"
    mapper.Add "l", "matchLevel"
    mapper.Add "m", "matchNumber"
    mapper.Add "r", "robot"
    mapper.Add "t", "teamNumber"
    mapper.Add "as", "autoStart"
    
    mapper.Add "al", "AlowerCargoAttempted"
    mapper.Add "ad", "AlowerCargoScored"
    mapper.Add "au", "AupperCargoAttempted"
    mapper.Add "us", "AupperCargoScored"
    
    mapper.Add "tc", "TlowerCargoAttempted"
    mapper.Add "tl", "TlowerCargoScored"
    mapper.Add "ta", "TupperCargoAttempted"
    mapper.Add "tu", "TupperCargoScored"
    
    mapper.Add "dr", "defenseRating"
    mapper.Add "de", "defense"
    mapper.Add "co", "comments"
    mapper.Add "c", "highestAttemptedClimb"
    mapper.Add "lsr", "lastSuccessfulRung"
    mapper.Add "cnf", "startedClimbBeforeEndgame"
    mapper.Add "be", "confidenceRating"
    mapper.Add "at", "taxi"
    mapper.Add "ss", "shootingSpot"
    
    
    If inp = "" Then
        Exit Sub
    End If

    'MsgBox (inp)
    
    fields = Split(inp, ";")
    If ArrayLen(fields) > 0 Then
        Dim i As Integer
        Dim str

        i = 0

        For Each str In fields
            par = Split(str, "=")
            key = par(0)
            value = par(1)
            If value = "x" Then
                value = 0
            End If
            If mapper.Exists(key) Then
                key = mapper(key)
            End If
            data.Add key, value
        Next

        tableexists = False
        
        Dim tbl As ListObject
        Dim sht As Worksheet

        'Loop through each sheet and table in the workbook
        For Each sht In ThisWorkbook.Worksheets
            For Each tbl In sht.ListObjects
                If tbl.Name = tableName Then
                    tableexists = True
                    Set table = tbl
                    Set ws = sht
                End If
            Next tbl
        Next sht

        If tableexists Then
            'Set table = ws.ListObjects(tableName)
        Else
            Dim tablerange As Range
            ws.ListObjects.Add(xlSrcRange, Range("A1:AZtc1"), , xlYes).Name = tableName
            i = 0
            Set table = ws.ListObjects(tableName)
            For Each key In data.Keys
                table.Range(i + 1) = key
                i = i + 1
            Next
        End If

        Dim newrow As ListRow
    
        Set newrow = table.ListRows.Add
        
        For Each str In data.Keys
            newrow.Range(table.ListColumns(str).Index) = data(str)
        Next
    End If
End Sub

