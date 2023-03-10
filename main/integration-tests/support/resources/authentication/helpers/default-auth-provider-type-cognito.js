/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License").
 *  You may not use this file except in compliance with the License.
 *  A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 *  or in the "license" file accompanying this file. This file is distributed
 *  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *  express or implied. See the License for the specific language governing
 *  permissions and limitations under the License.
 */
const schema = {
  config: {
    credentialHandlingType: 'redirect',
    inputManifestForCreate: {
      sections: [
        {
          children: [
            {
              desc:
                'This is a required field. This is used for uniquely identifying the authentication provider. It must be between 2 to 64 characters long and must start with an alphabet and may contain alpha numeric characters, underscores, and dashes. No other special symbols are allowed.',
              name: 'id',
              rules: 'required|string|between:2,64|regex:/^[a-zA-Z][a-zA-Z0-9_-]+$/',
              title: 'ID',
              type: 'stringInput',
            },
            {
              desc: 'This is a required field and must be between 3 and 255 characters long.',
              name: 'title',
              rules: 'required|between:3,255',
              title: 'Title',
              type: 'stringInput',
            },
          ],
          title: 'General Information',
        },
        {
          children: [
            {
              desc: 'Do you want to connect to an existing cognito user pool or create a new one?',
              name: 'connectExistingCognitoUserPool',
              noLabel: 'Create New',
              rules: 'required|boolean',
              title: 'Connect to Existing or Create New',
              type: 'yesNoInput',
              yesLabel: 'Connect to Existing',
            },
            {
              desc: 'Do you want to configure SAML identity federation with other SAML identity providers?',
              name: 'configureFedIdps',
              noLabel: 'no',
              rules: 'required|boolean',
              title: 'Identity Federation',
              type: 'yesNoInput',
              yesLabel: 'yes',
            },
          ],
          title: 'Congito User Pool Information',
        },
        {
          children: [
            {
              desc: 'Enter the ID of the cognito user pool you want to connect to.',
              name: 'userPoolId',
              rules: 'required|string',
              title: 'Cognito User Pool ID',
              type: 'stringInput',
            },
            {
              desc: 'Enter name of the cognito user pool you want to connect to.',
              name: 'userPoolName',
              title: 'Cognito User Pool Name',
              type: 'stringInput',
            },
          ],
          condition: '<%= connectExistingCognitoUserPool === true %>',
          title: 'Existing Cognito User Pool Information (Optional)',
        },
        {
          children: [
            {
              desc:
                'An identifier for the federated identity provider. This will be used for identifying the IdP. Usually this is configured to be same as the domain name of the IdP (E.g., amazonaws.com).',
              name: 'federatedIdentityProviders[0].id',
              rules: 'required|string',
              title: 'Identity Provider ID (IdP Id)',
              type: 'stringInput',
            },
            {
              desc: 'Name for the identity provider.',
              name: 'federatedIdentityProviders[0].name',
              rules: 'required|string',
              title: 'Identity Provider Name',
              type: 'stringInput',
            },
            {
              desc: 'Optional display name for the identity provider.',
              name: 'federatedIdentityProviders[0].displayName',
              title: 'Identity Provider Display Name',
              type: 'stringInput',
            },
            {
              desc: 'Enter identity provider SAML metadata XML document for setting up trust.',
              name: 'federatedIdentityProviders[0].metadata',
              title: 'Identity Provider SAML Metadata XML',
              type: 'textAreaInput',
            },
          ],
          condition: '<%= configureFedIdps === true %>',
          title: 'Configure Identity Federation (Optional)',
        },
      ],
    },
    inputManifestForUpdate: {
      sections: [
        {
          children: [
            {
              desc:
                'This is a required field. This is used for uniquely identifying the authentication provider. This must be same as the Cognito User Pool Provider URL in "https://cognito-idp.{aws-region}.amazonaws.com/{user-pool-id}" format',
              name: 'id',
              rules: 'required|string|between:2,64|regex:/^[a-zA-Z][a-zA-Z0-9_-]+$/',
              title: 'ID',
              type: 'stringInput',
            },
            {
              desc: 'This is a required field and must be between 3 and 255 characters long.',
              name: 'title',
              rules: 'required|between:3,255',
              title: 'Title',
              type: 'stringInput',
            },
          ],
          title: 'General Information',
        },
        {
          children: [
            {
              desc: 'Enter the ID of the cognito user pool you want to connect to.',
              name: 'userPoolId',
              title: 'Cognito User Pool ID',
              type: 'stringInput',
            },
            {
              desc: 'Enter name of the cognito user pool you want to connect to.',
              name: 'userPoolName',
              title: 'Cognito User Pool Name',
              type: 'stringInput',
            },
          ],
          title: 'Existing Cognito User Pool Information (Optional)',
        },
        {
          children: [
            {
              desc:
                'An identifier for the federated identity provider. This will be used for identifying the IdP. Usually this is configured to be same as the domain name of the IdP (E.g., amazonaws.com).',
              name: 'federatedIdentityProviders|-0-|/id',
              title: 'Identity Provider ID (IdP Id)',
              type: 'stringInput',
            },
            {
              desc: 'Name for the identity provider.',
              name: 'federatedIdentityProviders|-0-|/name',
              title: 'Identity Provider Name',
              type: 'stringInput',
            },
            {
              desc: 'Optional display name for the identity provider.',
              name: 'federatedIdentityProviders|-0-|/displayName',
              title: 'Identity Provider Display Name',
              type: 'stringInput',
            },
            {
              desc: 'Enter identity provider SAML metadata XML document for setting up trust.',
              name: 'federatedIdentityProviders|-0-|/metadata',
              title: 'Identity Provider SAML Metadata XML',
              type: 'textAreaInput',
            },
          ],
          title: 'Configure Identity Federation (Optional)',
        },
      ],
    },
    inputSchema: {
      $id: 'http://example.com/root.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      additionalProperties: false,
      definitions: {},
      properties: {
        authCodeTokenExchangeUri: {
          $id: '#/properties/authCodeTokenExchangeUri',
          type: 'string',
        },
        baseAuthUri: {
          $id: '#/properties/baseAuthUri',
          type: 'string',
        },
        clientId: {
          $id: '#/properties/clientId',
          type: 'string',
        },
        clientName: {
          $id: '#/properties/clientName',
          type: 'string',
        },
        enableNativeUserPoolUsers: {
          $id: '#/properties/enableNativeUserPoolUsers',
          type: 'boolean',
        },
        federatedIdentityProviders: {
          $id: '#/properties/providerConfig/properties/federatedIdentityProviders',
          items: {
            $id: '#/properties/providerConfig/properties/federatedIdentityProviders/items',
            properties: {
              displayName: {
                $id: '#/properties/federatedIdentityProviders/properties/displayName',
                type: 'string',
              },
              id: {
                $id: '#/properties/federatedIdentityProviders/properties/id',
                type: 'string',
              },
              metadata: {
                $id: '#/properties/federatedIdentityProviders/properties/metadata',
                type: 'string',
              },
              name: {
                $id: '#/properties/federatedIdentityProviders/properties/name',
                type: 'string',
              },
            },
            required: ['id', 'name', 'metadata'],
            title: 'The Items Schema',
            type: 'object',
          },
          type: 'array',
        },
        id: {
          $id: '#/properties/id',
          type: 'string',
        },
        signInUri: {
          $id: '#/properties/signInUri',
          type: 'string',
        },
        signOutUri: {
          $id: '#/properties/signOutUri',
          type: 'string',
        },
        title: {
          $id: '#/properties/title',
          type: 'string',
        },
        userPoolDomain: {
          $id: '#/properties/userPoolDomain',
          type: 'string',
        },
        userPoolId: {
          $id: '#/properties/userPoolId',
          type: 'string',
        },
        userPoolName: {
          $id: '#/properties/userPoolName',
          type: 'string',
        },
      },
      required: ['title'],
      type: 'object',
    },
  },
  description: 'Authentication provider for Amazon Cognito User Pool',
  title: 'Cognito User Pool',
  type: 'cognito_user_pool',
};
module.exports = schema;
