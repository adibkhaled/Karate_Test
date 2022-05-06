Feature: Checking RestAPI

  Background: 
    * def baseUrl = baseUrl
    * def user = userName
    * def pass = password
    Given url baseUrl
    And header Authorization = call read('basic-auth.js') { username : '#(user)' , password : '#(pass)' }

  Scenario: Check the all the rest api services
    Given print env
    And path 'api/services/public/util/services_info'
    When method GET
    Then status 200
    And match each response contains { resource: '#string', name: '#string'}

